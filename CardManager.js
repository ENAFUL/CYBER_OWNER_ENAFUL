class CardManager {
    constructor() {
        this.storageKey = 'my_digital_cards';
    }

    // কার্ডের ধরন ও মাস্কিং লজিক
    getCardType(number) {
        const num = number.toString().replace(/\s/g, '');
        if (/^\d{10}$/.test(num)) return "NID";
        if (/^\d{12}$/.test(num)) return "Aadhaar Card";
        if (/^\d{17}$/.test(num)) return "Birth Registration";
        if (/^34137/.test(num)) return "Amex";
        if (/^5[1-5]/.test(num)) return "MasterCard";
        if (/^4/.test(num)) return "Visa";
        return "Unknown";
    }

    // কার্ড সেভ করার ফাংশন
    saveCard(cardData) {
        let cards = JSON.parse(localStorage.getItem(this.storageKey) || "[]");
        cards.push(cardData);
        localStorage.setItem(this.storageKey, JSON.stringify(cards));
    }

    // সব কার্ড দেখার ফাংশন
    getAllCards() {
        return JSON.parse(localStorage.getItem(this.storageKey) || "[]");
    }
}
