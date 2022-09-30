import webview

if __name__ == '__main__':
  window = webview.create_window(title="Cable Analytics",url="./react-app/build/index.html")
  webview.start(debug=True,gui="qt")
  pass