import { RequestState } from '@/helper/enums';
import { delay, generateRandomString, generateStringArray } from '@/helper/utils';
import { DetailDataBarangAsetModel } from '@/model/data-barang-aset/detail-data-barang-aset-model';
import { useEffect, useRef, useState } from 'react';

export default function useEditDataBarangAset(id: string) {
  const [form, setForm] = useState<DetailDataBarangAsetModel>({});
  const [state, setState] = useState(RequestState.IDLE);
  const [vendorState, setVendorState] = useState(RequestState.IDLE);
  const [vendor, setVendor] = useState<string[]>([]);
  const vendorPage = useRef(1);
  const vendorMaxPage = 2;

  useEffect(() => {
    getDetailData();
    getVendor();
  }, []);

  function handleChange(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function getVendor(isInitial: boolean = true) {
    if (
      vendorState === RequestState.LOADING ||
      vendorState === RequestState.LOADING_NEXT_PAGE ||
      vendorState === RequestState.MAX_PAGE
    ) {
      return;
    }

    if (isInitial) {
      setVendor([]);
      vendorPage.current = 1;
      setVendorState(RequestState.IDLE);
    }

    console.log('getVendor,', vendorPage.current);

    setVendorState(isInitial ? RequestState.LOADING : RequestState.LOADING_NEXT_PAGE);

    await delay(1500);

    const data = generateStringArray();

    setVendorState(
      data.length === 0
        ? isInitial
          ? RequestState.ERROR
          : RequestState.ERROR_NEXT_PAGE
        : RequestState.SUCCESS
    );

    if (vendorPage.current === vendorMaxPage) {
      setVendorState(RequestState.MAX_PAGE);
    }

    vendorPage.current += 1;
    setVendor((prev) => [...prev, ...data]);
  }

  async function getDetailData() {
    setState(RequestState.LOADING);

    await delay(1500);

    setForm({
      noInventaris: '123',
      namaAset: 'Nama aset',
      deskripsiAset:
        'Lorem ipsum dolor sit amet consectetur. Dignissim lacus gravida porttitor potenti justo. ',
      spesifikasiAset: `Apple MacBook Air M1
Layar : 13,3 inci IPS (2560 x 1600 piksel) 227 ppi
Prosesor : chip Apple M1
Kartu grafik :-
RAM : 8 GB (dapat diperluas hingga 16 GB)
Penyimpanan : SSD 256 GB atau 512 GB (dapat diperluas hingga 2 TB)
Optik : Tidak
Konektivitas : Wi-Fi 6 802.11ax, Bluetooth versi 5.0
Port : 2x Thunderbolt/USB 4 (Thunderbolt 3 hingga 40 Gb/s dan USB 3.1 Gen hingga 10 Gb/s)
Baterai : Li-Polimer, 49,9 Wh`,
      isAsetSPK: false,
      noSPK: '1234',
      vendor: '',
      tipeAset: '',
      kategoriAset: '',
      subKategoriAset: '',
      location: '',
      convidentality: '',
      integrity: '',
      availability: '',
      tanggalAkuisisi: '',
      tanggalDepresiasi: '',
      asetTerdepresiasi: '',
      sumberAset: '',
      jumlahAset: '',
      nvb: '',
      statusAset: '',
    } as DetailDataBarangAsetModel);

    setState(RequestState.SUCCESS);
  }

  return { form, handleChange, vendor, getVendor, vendorState, state } as const;
}
