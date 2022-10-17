package com.example.crelan


import android.os.Bundle
import android.view.View
import android.webkit.WebView
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity


class MainActivity : AppCompatActivity() {

    private var mWebView: WebView? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val url: String = "https://6d5b-212-81-177-177.eu.ngrok.io"
        WebView.setWebContentsDebuggingEnabled(true);
        val myWebView: WebView = findViewById(R.id.webview)
        myWebView.loadUrl(url);
        myWebView.addJavascriptInterface(WebAppInterface(this), "Android");
        myWebView.settings.javaScriptEnabled = true
        this.mWebView = myWebView;

    }

    fun onTriggerPressed(view: View?) {
        val editText = findViewById<EditText>(R.id.editText)
        mWebView?.loadUrl("javascript:onAndroidMessage('testEvent', '"+editText.text+"')")
    }

}


