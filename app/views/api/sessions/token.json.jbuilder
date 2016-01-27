json.user do
  json.id @user.id
  json.email @user.email
  json.name @user.name
end
json.session_token @token
