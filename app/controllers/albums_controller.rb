class AlbumsController < ApplicationController
  before_action :set_album, only: [:show, :update, :destroy]

  # GET /users
  def index
    @user = User.find(params[:user_id])
    @albums = @user.albums

    render json: @albums
  end

  # GET /users/1
  def show
    render json: @album
  end

  # POST /users
  def create
    # @user = User.find(params[:user_id])
    @album = album.new(album_params)
    # @user.albums << @album
    # or
    # @album.user = @user
    if @album.save
      render json: @album, status: :created
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @album.update(album_params)
      render json: @album
    else
      render json: @album.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @album.destroy
  end


  def find_all_albums 
    @albums = album.all
    render json: @albums
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_album
      @album = album.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def album_params
      params.require(:album).permit(:content, :aimgURL, :user_id)
    end
end
