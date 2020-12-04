class ArtistsController < ApplicationController
  before_action :set_artist, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:index, :create, :update, :destroy, :my_artists]
  # GET /users
  def index
    @artists = @current_user.artists
    render json: @artists
  end

  # GET /users/1
  def show
    render json: @artist
  end

  # POST /users
  def create
    @artist = Artist.new(artist_params)
    @artist.user = @current_user
    # @user.artists << @artist
    # or
    # @artist.user = @user
    if @artist.save
      render json: @artist, status: :created
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @artist.update(artist_params)
      render json: @artist
    else
      render json: @artist.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @artist.destroy
  end

def my_artists 
  @my_artists = @current_user.artists 
  render json: @my_artists
end

  def find_all_artists 
    @artists = artist.all
    render json: @artists
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_artist
      @artist = Artist.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def artist_params
      params.require(:artist).permit(:name, :imgURL, :user_id)
    end
end
