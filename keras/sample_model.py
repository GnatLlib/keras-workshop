from keras.models import Sequential
from keras.layers import Dense
from keras.utils import plot_model
import keras as keras

model = Sequential()
model.add(Dense(units=64, activation='relu', input_dim=100))
model.add(Dense(units=64, activation='tanh', ))
model.add(Dense(units=32, activation='sigmoid', ))
model.add(Dense(units=16, activation='linear', ))
model.add(Dense(units=10, activation='softmax'))

model.compile(loss=keras.losses.categorical_crossentropy,
              optimizer=keras.optimizers.SGD(lr=0.01, momentum=0.9, nesterov=True))

model_json = model.to_json()
model_file = open("./export/test_model.json", "w")
model_file.write(model_json)

plot_model(model, to_file='./export/model.png', show_shapes=True)