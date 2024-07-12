import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">KUALITAS LAYANAN</span>
      <h2 className="title text-center ">Kelebihan Layanan Kami</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Team Profesional dan Berpengalaman"
          desc="Kami Quadra Pump Solutions Yogyakarta mempunyai tim teknisi yang profesional dan berpengalaman dalam penanganan segala jenis permasalahan pompa air. Mereka memiliki pengetahuan mendalam dan keterampilan yang teruji dalam bidang ini, sehingga Anda dapat yakin bahwa pompa air Anda akan ditangani dengan baik oleh ahli di bidangnya."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="Peralatan Modern dan Terjamin Kehandalannya"
          desc="Kami mengutamakan kualitas dalam setiap layanan yang kami berikan, termasuk dalam pemilihan peralatan yang digunakan. Kami menggunakan peralatan modern dan terjamin kehandalannya sehingga proses perbaikan, instalasi, atau perawatan pompa air dapat dilakukan dengan efektif dan efisien."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Pelayanan Terbaik untuk Kepuasan Pelanggan"
          desc="Kepuasan pelanggan adalah prioritas utama kami. Kami selalu berusaha memberikan pelayanan terbaik, mulai dari respons cepat, komunikasi yang jelas, hingga solusi yang tepat dan memuaskan untuk setiap masalah pompa air yang Anda hadapi. Kepuasan Anda adalah cerminan dari kualitas layanan yang kami berikan."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Instalasi Pompa Air Berkualitas Tinggi"
          desc="Kami menawarkan jasa instalasi pompa air dengan standar kualitas tinggi. Tim kami akan melakukan instalasi dengan teliti dan sesuai dengan panduan yang benar, sehingga pompa air dapat berfungsi dengan optimal dan awet."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
