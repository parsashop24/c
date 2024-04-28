document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('dynamic-content');

    // Dynamically load content
    container.innerHTML = `
        <img src="https://raw.githubusercontent.com/parsashop24/c/main/parsashop.png" alt="ParsaShop24" class="img-fluid mb-4 logo">
        <h2 class="mb-4">خرید مستقیم از اروپا با پارساشاپ 24</h2>
        <div class="telegram-card">
            <a href="https://t.me/parsashop24" class="btn btn-primary btn-lg w-100 mb-3" target="_blank">ارتباط در تلگرام</a>
        </div>
        <!-- Frequently Asked Questions -->
        <div class="text-center mt-4 faq-card">
            <h3>راهنمای سفارش</h3>
            <div class="faq-item">
                <p><strong>مدت زمان ارسال</strong> </p>
                <div class="faq-answer">
                    <p>یک تا چهار هفته</p>
                </div>
            </div>
            <div class="faq-item">
                <p><strong>چگونگی سفارش</strong> </p>
                <div class="faq-answer">
                    <p>پس از واریز هزینه (تسویه تک مرحله‌ای)، کد تایید سفارش به شما ارسال می‌شود و در اولین فرصت به ایران ارسال می‌شود 
                    <br>
                    پست به سراسر ایران رایگان است. ارسال سفارش‌ها با پیک فقط در تهران امکان‌پذیر است
                    <br>
                    برای سفارش‌های بالاتر از 5 میلیون تومان هزینه پیک نیز رایگان است</p>
                </div>
            </div>
        </div>
        <!-- End of Frequently Asked Questions -->
        <div class="card shadow-lg mt-4 calculate-price-card">
            <div class="card-body">
                <h2 class="text-center mb-4">محاسبه قیمت</h2>
                <form id="price-form">
                    <div class="mb-3 row">
                        <label for="oP" class="form-label col-md-6">قیمت اصلی کالا به یورو</label>
                        <div class="col-md-6">
                            <input type="number" id="oP" class="form-control" min="0" required>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label for="w" class="form-label col-md-6">وزن کالا به گرم (مثال 200 گرم)</label>
                        <div class="col-md-6">
                            <input type="number" id="w" class="form-control" min="0" required>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg w-100">محاسبه قیمت</button>
                </form>
                <div id="result" class="text-center mt-4"></div>
                <div id="additionalInfo" class="text-center mt-4"></div>
            </div>
        </
