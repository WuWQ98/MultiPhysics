import webview

if __name__ == '__main__':
  window = webview.create_window(title="Cable Analytics",url="./react-app/build/index.html",width=1024,height=768)
  webview.start(debug=True)
  pass