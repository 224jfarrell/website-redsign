from flask import Flask, render_template, request, session, redirect, url_for
from xml.etree import ElementTree

# force download jsglue file and change jinja2 to markupsafe on line 2

app = Flask(__name__)

app.secret_key = '743777217A25432A462D4A614E645266556A586E3272357538782F413F4428472B4B6250655368566B5970337336763979244226452948404D635166546A576E5A7134743777217A25432A462D4A614E645267556B58703273357638782F413F4428472B4B6250655368566D597133743677397A244226452948404D635166546A576E5A7234753778214125442A462D4A614E645267556B58703273357638792F423F4528482B4B6250655368566D597133743677397A24432646294A404E635166546A576E5A7234753778214125442A472D4B6150645367556B58703273357638792F423F4528482B4D6251655468576D597133743677397A24432646294A404E635266556A586E327234753778214125442A472D4B6150645367566B59703373367638792F423F4528482B4D6251655468576D5A7134743777217A24432646294A404E635266556A586E3272357538782F413F442A472D4B6150645367566B59703373367639792442264529482B4D6251655468576D5A7134743777217A25432A462D4A614E635266556A586E3272357538782F413F4428472B4B6250655367566B5970337336763979244226452948404D635166546A576D5A7134743777217A25432A462D4A614E645267556B58703272357538782F413F4428472B4B6250655368566D5971337436763979244226452948404D635166546A576E5A72'

my_username = 'seacove'
my_password = '112358'

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