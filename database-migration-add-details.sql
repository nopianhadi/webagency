-- =============================================
-- Migration: Add Project Detail Fields
-- =============================================
-- Jalankan SQL ini di Supabase SQL Editor untuk menambahkan kolom baru

-- Add new columns to projects table
ALTER TABLE projects 
ADD COLUMN IF NOT EXISTS full_description TEXT,
ADD COLUMN IF NOT EXISTS images TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS video_url TEXT,
ADD COLUMN IF NOT EXISTS features TEXT[] DEFAULT '{}',
ADD COLUMN IF NOT EXISTS challenges TEXT,
ADD COLUMN IF NOT EXISTS results TEXT;

-- Update existing projects with sample detailed data
UPDATE projects 
SET 
  full_description = 'Dashboard real-time untuk monitoring keuangan UMKM dengan integrasi AI untuk prediksi cash flow dan analisis pengeluaran. Fitur utama meliputi visualisasi data interaktif, laporan otomatis, dan peringatan pengeluaran berlebihan. Sistem ini dirancang khusus untuk membantu UMKM dalam mengelola keuangan mereka dengan lebih efisien dan akurat.',
  images = ARRAY[
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
  ],
  video_url = 'https://www.youtube.com/embed/lRs3bU_Eka0',
  features = ARRAY[
    'Visualisasi data real-time dengan grafik interaktif',
    'Prediksi cash flow menggunakan AI/Machine Learning',
    'Tracking pengeluaran otomatis dengan kategorisasi',
    'Laporan keuangan otomatis (harian, mingguan, bulanan)',
    'Alert untuk pengeluaran berlebihan',
    'Multi-currency support',
    'Export data ke Excel/PDF',
    'Dashboard mobile-responsive'
  ],
  challenges = 'Tantangan utama dalam proyek ini adalah integrasi dengan berbagai sistem akuntansi yang berbeda-beda. Setiap UMKM menggunakan sistem yang berbeda, dari Excel sederhana hingga software akuntansi kompleks.

Solusi: Kami membuat API adapter yang fleksibel yang bisa menyesuaikan dengan berbagai format data. Menggunakan pattern Strategy untuk handle berbagai jenis input data, dan implementasi ETL (Extract, Transform, Load) pipeline untuk normalisasi data.',
  results = 'Hasil implementasi sangat positif:
• Meningkatkan efisiensi pengelolaan keuangan hingga 60%
• Mengurangi kesalahan input data hingga 85%
• Menghemat waktu pembuatan laporan dari 4 jam menjadi 15 menit
• 95% user satisfaction rate
• ROI tercapai dalam 3 bulan pertama'
WHERE title = 'Dashboard Analitik Keuangan UMKM';

UPDATE projects 
SET 
  full_description = 'Sistem CRM untuk rumah sakit dengan AI assistant yang membantu penjadwalan dan manajemen pasien. Sistem ini mengintegrasikan rekam medis elektronik dengan chatbot AI untuk triage awal pasien. Dirancang untuk meningkatkan efisiensi layanan kesehatan dan kepuasan pasien.',
  images = ARRAY[
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
  ],
  video_url = 'https://www.youtube.com/embed/lRs3bU_Eka0',
  features = ARRAY[
    'AI-powered chatbot untuk triage pasien',
    'Sistem penjadwalan otomatis',
    'Rekam medis elektronik terintegrasi',
    'Notifikasi appointment via WhatsApp/SMS',
    'Dashboard untuk dokter dan staff',
    'Analitik kunjungan pasien',
    'Integrasi dengan BPJS'
  ],
  challenges = 'Tantangan terbesar adalah memastikan keamanan data medis pasien sesuai regulasi kesehatan. Data medis sangat sensitif dan harus dilindungi dengan standar tertinggi.

Solusi: Implementasi end-to-end encryption, role-based access control (RBAC), audit logging untuk semua akses data, dan compliance dengan standar ISO 27001 untuk keamanan informasi kesehatan.',
  results = 'Dampak positif yang terukur:
• Mengurangi waktu tunggu pasien hingga 40%
• Meningkatkan akurasi diagnosis awal melalui AI triage
• Efisiensi operasional meningkat 55%
• Patient satisfaction score naik dari 3.2 menjadi 4.7/5
• Mengurangi no-show appointments hingga 70%'
WHERE title = 'CRM Healthcare dengan AI Assistant';

UPDATE projects 
SET 
  full_description = 'Platform otomasi untuk toko online dengan chatbot AI dan inventory management system. Mengotomasi proses penjualan, manajemen stok, dan layanan pelanggan 24/7. Sistem ini membantu pemilik toko online untuk fokus pada strategi bisnis, sementara operasional harian berjalan otomatis.',
  images = ARRAY[
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop'
  ],
  features = ARRAY[
    'Chatbot AI untuk customer service 24/7',
    'Inventory management real-time',
    'Automated order processing',
    'Multi-channel integration (Tokopedia, Shopee, dll)',
    'Smart pricing & discount automation',
    'Sales analytics & forecasting',
    'Automated email marketing'
  ],
  challenges = 'Integrasi dengan berbagai marketplace (Tokopedia, Shopee, Lazada, dll) yang masing-masing memiliki API dan format data berbeda.

Solusi: Membuat unified API layer yang menormalisasi data dari berbagai marketplace. Menggunakan message queue untuk handle high-volume transactions dan retry mechanism untuk handle API failures.',
  results = 'Hasil yang dicapai:
• Meningkatkan penjualan hingga 120% dalam 6 bulan
• Mengurangi waktu response customer dari 2 jam menjadi instant
• Efisiensi inventory management 80%
• Mengurangi overselling hingga 95%
• Customer retention rate naik 45%'
WHERE title = 'Platform Otomasi E-commerce';

-- Verify the update
SELECT 
  title, 
  CASE 
    WHEN full_description IS NOT NULL THEN '✅ Updated'
    ELSE '❌ Not Updated'
  END as status,
  array_length(images, 1) as image_count,
  array_length(features, 1) as feature_count
FROM projects
ORDER BY created_at DESC;
