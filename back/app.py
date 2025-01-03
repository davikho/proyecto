from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Configuración de la aplicación
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///gestion_asociacion.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Habilitar CORS
CORS(app, resources={r"/*": {"origins": "*"}})

# Definir el modelo de la base de datos
class Socio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    direccion = db.Column(db.String(255), nullable=False)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    telefono = db.Column(db.String(15), nullable=False)
    aprobado = db.Column(db.Boolean, default=False)
    monto_pagado = db.Column(db.Float, default=0.0)
    monto_estimado = db.Column(db.Float, default=100.0)
    estado = db.Column(db.String(10), default='activo')  # 'activo' o 'inactivo'

    def __repr__(self):
        return f"<Socio {self.nombre}>"

# Crear la base de datos (si no existe)
with app.app_context():
    db.create_all()

@app.route('/')
def index():
    return 'Bienvenido a la API de la Asociación'

# Ruta para consultar todos los socios
@app.route('/socios/listar', methods=['GET'])
def listar_socios():
    socios = Socio.query.all()
    return jsonify([{
        'id': socio.id,
        'nombre': socio.nombre,
        'direccion': socio.direccion,
        'correo': socio.correo,
        'telefono': socio.telefono,
        'aprobado': socio.aprobado,
        'monto_pagado': socio.monto_pagado,
        'monto_estimado': socio.monto_estimado,
        'estado': socio.estado
    } for socio in socios])

# Ruta para consultar un socio específico por ID
@app.route('/socios/consultar/<int:id>', methods=['GET'])
def consultar_socio(id):
    socio = Socio.query.get(id)
    if not socio:
        return jsonify({'error': 'Socio no encontrado'}), 404
    return jsonify({
        'id': socio.id,
        'nombre': socio.nombre,
        'direccion': socio.direccion,
        'correo': socio.correo,
        'telefono': socio.telefono,
        'aprobado': socio.aprobado,
        'monto_pagado': socio.monto_pagado,
        'monto_estimado': socio.monto_estimado,
        'estado': socio.estado
    })

# Ruta para registrar un nuevo socio
@app.route('/socios/crear', methods=['POST'])
def crear_socio():
    data = request.get_json()
    nombre = data['nombre']
    direccion = data['direccion']
    correo = data['correo']
    telefono = data['telefono']

    # Verificar si el correo ya existe en la base de datos
    socio_existente = Socio.query.filter_by(correo=correo).first()
    if socio_existente:
        return jsonify({'error': 'El correo electrónico ya está registrado'}), 400

    # Crear nuevo socio
    nuevo_socio = Socio(nombre=nombre, direccion=direccion, correo=correo, telefono=telefono)
    db.session.add(nuevo_socio)
    db.session.commit()

    return jsonify({'mensaje': 'Socio registrado exitosamente'}), 201


# Ruta para eliminar un socio
@app.route('/socios/eliminar/<int:id>', methods=['DELETE'])
def eliminar_socio(id):
    socio = Socio.query.get(id)
    if not socio:
        return jsonify({'error': 'Socio no encontrado'}), 404

    db.session.delete(socio)
    db.session.commit()

    return jsonify({'mensaje': 'Socio eliminado exitosamente'})

if __name__ == '__main__':
    app.run(debug=True)
