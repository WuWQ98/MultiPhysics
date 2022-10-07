import webview

if __name__ == '__main__':
  window = webview.create_window(title="MultiPhysics",url="./react-app/build/index.html",width=1024,height=768)
  webview.start(debug=True)
  pass