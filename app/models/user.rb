class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validates :email, :session_token, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, :session_token, uniqueness: true

  has_many :recipes, foreign_key: :author_id

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    if user.try(:is_password?, password)
      user
    else
      nil
    end
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64
    if User.find_by_session_token(token)
      self.generate_session_token
    else
      token
    end
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    # self.session_token = User.generate_session_token
    self.session_token = SessionToken.encode(user: self)
    self.save!
    self.session_token
  end

  private
    def ensure_session_token
      self.session_token ||= User.generate_session_token
      self.session_token ||= SessionToken.encode(user: self)
    end
end
