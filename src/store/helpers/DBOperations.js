import firebaseDB from '@/firebase-config';
import { doc, collection, getDocs, getDoc, addDoc, deleteDoc, updateDoc, query, where } from 'firebase/firestore/lite';

class DbOperations {
    constructor(collectionTitle) {
        this.dbCollection = collection(firebaseDB, `/${collectionTitle}`);
    }

    getListFromSnapshot(snapshot) {
        const list = [];
        snapshot.docs.forEach((doc) => {
            list.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        return list;
    }

    loadItemsList() {
        return new Promise((resolve, reject) => {
            getDocs(this.dbCollection)
                .then((querySnapshot) => {
                    resolve(this.getListFromSnapshot(querySnapshot));
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    addItem(item) {
        return new Promise((resolve, reject) => {
            addDoc(this.dbCollection, item)
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    // Метод для додавання кількох десертів
    addItems(items) {
        const promises = items.map(item => this.addItem(item));
        return Promise.all(promises)
            .then(() => true)
            .catch(error => {
                console.error("Помилка при додаванні десертів:", error);
                throw error; // повторно викинути помилку
            });
    }

    deleteItem(id) {
        return new Promise((resolve, reject) => {
            deleteDoc(doc(this.dbCollection, id))
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    updateItem(itemId, data) {
        return new Promise((resolve, reject) => {
            const oldDocRef = doc(this.dbCollection, itemId);
            updateDoc(oldDocRef, data)
                .then(() => {
                    resolve(true);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getItemById(itemId) {
        return new Promise((resolve, reject) => {
            const docRef = doc(this.dbCollection, itemId);
            getDoc(docRef)
                .then((docSnap) => {
                    if (docSnap.exists()) resolve(docSnap.data());
                    else resolve({});
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    loadFilteredData(fieldTitle, compareOperator, valueToCompare) {
        const q = query(this.dbCollection, where(fieldTitle, compareOperator, valueToCompare));
        return new Promise((resolve, reject) => {
            getDocs(q)
                .then((querySnapshot) => {
                    resolve(this.getListFromSnapshot(querySnapshot));
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}

export default DbOperations;
