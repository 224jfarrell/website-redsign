from flask import Flask, render_template, request, session, redirect, url_for
from xml.etree import ElementTree
from flask_jsglue import JSGlue

# force download jsglue file and change jinja2 to markupsafe on line 2

app = Flask(__name__)
jsglue = JSGlue(app)

my_username = 'placeholder'
my_password = 'placeholder'

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/rooms')
def rooms():
    return render_template("rooms.html")

@app.route('/attractions')
def attractions():
    return render_template("attractions.html")

@app.route('/register')
def register():
    return render_template("register.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/login')
def login():
    if request.method == 'POST':
        username = request.form["username"]
        password = request.form["password"]
        if username == my_username and password == my_password:
            session["logged_in"] = True
            return redirect(url_for("home"))
        else:
            return render_template("login.html", failed_login=True)

    if session.get("logged_in"):
        return redirect(url_for("home"))
    else:
        return render_template("login.html")

@app.route('/booking')
def booking():
    if session.get("logged_in"):
        return render_template("booking.html")
    else:
        return redirect(url_for("login"))