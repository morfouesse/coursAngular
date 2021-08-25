import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class StorageService {
    readonly KEY_USER = 'user';
    readonly KEY_ANIMAL = 'animal';

    constructor() { }

    storageSetItem(keyItem: string, value: object) {
        localStorage.setItem(keyItem, JSON.stringify(value));
    }

    storageGetItem(keyItem: string) {
        return JSON.parse(localStorage.getItem(keyItem));
    }

    storageRemoveItem(keyItem: string) {
        localStorage.removeItem(keyItem);
    }

    storageClear() {
        localStorage.clear();
    }
}
