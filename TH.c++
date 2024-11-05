#include <PubSubClient.h>
#include <DHT.h>

#define DHTPIN D1
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "Nombre del wifi";
const char* password = "Contraseña del wifi";

const char* mqtt_server = "bricker.emqx.io";
const int mqtt_port = 1883;
const char* mqtt_user = "SistemaTH";
const char* temp_topic = "TH/Temperatura";
const char* hum_topic = "TH/Humedad";      

WiFiClient espClient;
PubSubClient client(espClient);

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Conectando a ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi conectado");
  Serial.println("Dirección IP: ");
  Serial.println(WiFi.localIP());
}

void reconnect(){
    while (!client.connected()) {
        Serial.print("Intentando conexión MQTT...");
        if (client.connect("ESP8266Client", mqtt_user, NULL)) {
        Serial.println("Conectado");
        } else {
        Serial.print("falló, rc=");
        Serial.print(client.state());
        Serial.println(" Intentando de nuevo en 5 segundos");
        delay(5000);
        }
    }
}

void setup() {
  Serial.begin(115200);
  dht.begin();
  setup_wifi();
  client.setServer(mqtt_server, mqtt_port);
}

void loop(){
    if (!client.connected()) {
        reconnect();
    }
    client.loop();
    delay(2000);
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    if (isnan(h) || isnan(t)) {
        Serial.println("Error al leer el sensor DHT!");
        return;
    }
    Serial.print("Humedad: ");
    Serial.print(h);
    Serial.print(" %\t");
    Serial.print("Temperatura: ");
    Serial.print(t);
    Serial.println(" *C ");
    char hum[10];
    char temp[10];
    dtostrf(h, 1, 2, hum);
    dtostrf(t, 1, 2, temp);
    client.publish(hum_topic, hum);
    client.publish(temp_topic, temp);
    delay(5000);
}
