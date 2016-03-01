json.id @user.id
json.email @user.email
json.name @user.name || @user.email
json.photo_url asset_path(@user.photo.url)
json.author @author
