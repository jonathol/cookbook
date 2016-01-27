class SessionToken
  def self.encode(payload, expiration = 10080)
    payload[:exp] = expiration.minutes.from_now.to_i
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def self.decode(token, leeway = nil)
    decoded = JWT.decode(token, Rails.application.secrets.secret_key_base, leeway: leeway)
    HashWithIndifferentAccess.new(decoded[0])
  end
end
