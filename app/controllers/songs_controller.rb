class SongsController < ApplicationController
  before_action :set_song, only: [:show, :update, :destroy]

  # GET /artists
  def index
    @songs = Song.all
    render json: @songs
  end

  # GET /artists/1
  def show
    render json: @song
  end

  # POST /artists
  def create
    # @artist = artist.find(params[:artist_id])
    @song = song.new(song_params)
    # @artist.songs << @song
    # or
    # @song.artist = @artist
    if @song.save
      render json: @song, status: :created
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /artists/1
  def update
    if @song.update(song_params)
      render json: @song
    else
      render json: @song.errors, status: :unprocessable_entity
    end
  end

  # DELETE /artists/1
  def destroy
    @song.destroy
  end


  def find_all_songs 
    @songs = song.all
    render json: @songs
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_song
      @song = Song.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def song_params
      params.require(:song).permit(:name, :imgURL, :artist_id)
    end
end
