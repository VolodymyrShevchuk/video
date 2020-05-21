require 'test_helper'

class VideoControllerTest < ActionDispatch::IntegrationTest
  test "should get landing" do
    get video_landing_url
    assert_response :success
  end

  test "should get index" do
    get video_index_url
    assert_response :success
  end

  test "should get screenshare" do
    get video_screenshare_url
    assert_response :success
  end

  test "should get name" do
    get video_name_url
    assert_response :success
  end

  test "should get chat" do
    get video_chat_url
    assert_response :success
  end

end
