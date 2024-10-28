let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(productName + ' تم إضافته إلى السلة!');
}

function sendOrder() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (!name || !phone) {
        alert('الرجاء ملء جميع الحقول.');
        return;
    }

    let total = 0;
    let message = `طلب جديد من ${name} (${phone}):\n`;
    cart.forEach(item => {
        message += `${item.productName} - ${item.price} ريال\n`;
        total += item.price;
    });

    message += `\nالمجموع: ${total} ريال`;

    const whatsappUrl = `https://wa.me/967779648073?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}