require 'sinatra'

enable :sessions
set :session_secret, "roof dog"

set :public_folder, proc { File.join(root) }

get '/' do

  temp = session[:temperature]
  # puts temp
  "hello #{temp}"
  # redirect("index.html")
end

post '/' do
  session[:temperature] = params[:temperature]
end