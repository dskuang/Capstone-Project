class ApplicationController < ActionController::Base

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :logged_in?, :user_params, :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token
    session[:session_token] = user.session_token
  end

  def logout
    session[:session_token] = nil
  end

  def user_params
    params.require(:user).permit(:username, :password, :profileUrl, :firstname, :lastname)
  end

  def check_login
    unless logged_in?
      redirect_to new_session_url
    end
  end

end
