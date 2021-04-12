import numpy as np
import pandas as pd
import pickle
# import the libraries
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import KFold
# Check the prediction precision and accuracy
# evaluasi performa model
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from sklearn import tree
from sklearn.tree import export_graphviz
import matplotlib.pyplot as plt

#import dataset
diabetes_df = pd.read_csv('./dataset/Diabetestype-pre.csv')
diabetes_df.head(10)  # melihat dataframe diabetes

# pisahkan antara atribut dan label
X = diabetes_df.drop('Type', 1)
y = diabetes_df.iloc[:, -1]

kf_3 = KFold(n_splits=3)  # K-Fold dengan jumlah k=3 split
kf_5 = KFold(n_splits=5)  # K-Fold dengan jumlah k=5 split
kf_10 = KFold(n_splits=10)  # K-Fold dengan jumlah k=10 split

i = 1
for train_index, test_index in kf_10.split(X):
    print("\nCross Validation -", i)
    print("Train index: \n", train_index)
    print("Test index: \n", test_index)
    i = i+1


for train_index, test_index in kf_10.split(X):
    #print(train_index, test_index)
    X_train, X_test = X.loc[train_index], X.loc[test_index]
    y_train, y_test = y[train_index], y[test_index]

    model_rf = RandomForestClassifier(
        n_estimators=10, criterion='gini', random_state=42)
    model_rf.fit(X_train, y_train)  # training model/classifier
    y_pred = model_rf.predict(X_test)  # melakukan prediksi

    print("confusion matrix: \n", confusion_matrix(y_test, y_pred))
    print(classification_report(y_test, y_pred))

    print("=======================================================")


fig, axes = plt.subplots(nrows=1, ncols=1, figsize=(4, 4), dpi=700)
tree.plot_tree(model_rf.estimators_[0],
               filled=True)
fig.savefig('rf_individualtree.png')

# export model to create API
pickle.dump(model_rf, open('model.pkl', 'wb'))

cek = [[31, 5.2, 6.8, 10.9, 4.2, 33]]
print("model rf")
print(model_rf.predict(cek))
