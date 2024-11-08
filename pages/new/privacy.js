import Sidebar from "@/partials/v2/Sidebar";
import MainLayout from "layout/mainLayout";
import NewsAdd from "assets/images/news-ad.png";
import { getSession } from "next-auth/react";
import { wrapper } from "@/utils/store";
import { fetchCategories } from "@/slices/categories";
import { fetchSources } from "@/slices/sources";
import { fetchServerItem } from "@/slices/serverItems";
import { fetchHomeItems, homeItemsSelector } from "@/slices/homeItems";
import RedCaret from "@/components/v2/RedCaret";
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const session = await getSession(context);
    await store.dispatch(fetchSources(session));
    await store.dispatch(fetchCategories(session));
    await store.dispatch(fetchServerItem(session));
    await store.dispatch(fetchHomeItems(session));
  }
);
const Privacy = () => {
  return (
    <>
      <section className="notification live-stream">
        <div className="container">
          <div className="row g-3 mt-3">
            {/* right side */}
            <div className="col-md-9 jawlatt-bnr-top-mid jawlatt-bnr-top-rt">
              <div className="jawlatt-single-news pt-3">
                <h3 className="mb-0 pb-2 text-dark fw-bold jawlatt-news-title mb-4">
                  <RedCaret />
                  شروط الاستخدام
                </h3>
                <p className="fs-5 arab24-text-gray">
                  1. باستخدامكم bbcarabic.com تصبحون ملزمين أمام القانون بهذه
                  الشروط، والتي سيبدأ تطبيقها فور استخدامكم لـ bbcarabic.com. في
                  حال عدم موافقتكم على أن تكونوا ملزمين قانونيا بالشروط التالية،
                  يرجي عدم استخدام/تصفح bbcarabic.com. <br />
                  2. يمكن لـ BBC تغيير هذه الشروط بالتنويه عنها على الانترنت.
                  يرجى مراجعة هذه الشروط بانتظام لضمان معرفتكم لأي تغيرات قد
                  تجريها BBC. استمرار استخدامكم لـ bbcarabic.com بعد نشر
                  التغييرات يعني أنكم توافقون على أن تكونوا ملزمين أمام القانون
                  بهذه الشروط بعد تحديثها و/ أو تعديلها. استخدام bbcarabic.com{" "}
                  <br />
                  3. لا يسمح لكم بنسخ محتوى bbcarabic.com أو إعادة نشره أو
                  تحميله أو بثه أو نشره أو إتاحته للجماهير أو استخدام محتواه بأي
                  صورة أخرى بخلاف الاستخدام الشخصي غير التجاري. يجب عدم تعديل أو
                  تغيير أو إنتاج أعمال مبنية عن محتوى bbcarabic.com إلا إذا كان
                  ذلك لاستخدامكم الشخصي غير التجاري. أي استخدام آخر لمحتوى
                  bbcarabic.com يستلزم وجود تصريح كتابي مسبق من BBC. <br />
                  4. يجب استخدام bbcarabic.com لأغراض يصرح بها القانون وبأسلوب
                  لا يتعدى على حقوق أي فرد في استخدام أو الاستمتاع بمحتوى
                  bbcarabic.com أو يحد من هذه الحقوق أو يمنعها. السلوك غير
                  المسموح به يشمل التحرش بأي فرد أو إيذاءه ونشر المحتوى المسيء
                  أو البذيء أو المخل بالتدفق الطبيعي للحوار في bbcarabic.com.
                </p>

                <h5 className="fw-bold mb-4 mt-5">حدود المسؤولية القانونية</h5>
                <p className="fs-20 arab24-text-gray">
                  5. محتوى bbcarabic.com بما في ذلك المعلومات والأسماء والصور
                  والشعارات الخاصة بـ BBC أو BBC Worldwide أو المتعلقة بهذا
                  المحتوى متوفرة على أساس تقديمها &quot; وفقا لما هي عليه&quot;
                  أو &quot; وفقا لتوافرها&quot; بدون أي تمثيل أو تقديم أي ضمانات
                  (سواء كان القانون ينص عليها أو يتضمنها)، وذلك في حدود ما يسمح
                  به القانون، بما في ذلك الضمانات المفهومة ضمنا مثل النوعية
                  الجيدة وملاءمة الغرض وعدم التعدي والأمن والدقة. <br />
                  6. لن تكون BBC أو BBC Worldwide Limited مسؤولة عن أي نوع من
                  أنواع الخسائر أو الأضرار التالية (سواء كانت هذه الخسائر متوقعة
                  أو يمكن توقعها أو معلومة أو غير ذلك): (أ) فقد البيانات - (ب)
                  فقد العائدات أو الأرباح المتوقعة - (ج) خسارة الأعمال - (د)
                  فقدان الفرص - (هـ) الإضرار بالسمعة - (و) خسائر الطرف الثالث -
                  (ي) أي أضرار غير مباشرة قد تنجم عن استخدام bbcarabic.com.{" "}
                  <br />
                  7. لا تضمن BBC عدم انقطاع الخدمات المتضمنة في bbcarabic.com أو
                  خلوها من الخطأ أو أن العيوب سيتم إصلاحها أو خلو شبكة تقديم
                  خدمة الانترنت (server) من الفيروسات.
                </p>
              </div>
            </div>
            {/* left side */}
            <div className="col-md-3 jawlatt-bnr-top-lt">
              <div className="p-md-4 mb-3">
                <img src={NewsAdd.src} className="card-img-top" alt="NewsAd" />
              </div>
              <Sidebar></Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Privacy.getLayout = (page) => {
  return <MainLayout title={"الرئيسية"}>{page}</MainLayout>;
};
export default Privacy;
