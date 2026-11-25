// JP Chit Funds — Interactive Application Logic
(function () {
  const CHIT_PLANS = [
    {
      id: 'jp-1l-20',
      name: 'Starter Savings Chit',
      value: 100000,
      monthly: 5000,
      months: 20,
      category: 'short',
      maxDiscountPct: 30,
      estDividendRange: '10% – 14%',
      tag: 'Popular for First-Timers'
    },
    {
      id: 'jp-2l-25',
      name: 'Family Milestone Chit',
      value: 200000,
      monthly: 8000,
      months: 25,
      category: 'medium',
      maxDiscountPct: 35,
      estDividendRange: '12% – 16%',
      tag: 'Balanced Growth'
    },
    {
      id: 'jp-3l-30',
      name: 'Education & Gold Chit',
      value: 300000,
      monthly: 10000,
      months: 30,
      category: 'medium',
      maxDiscountPct: 35,
      estDividendRange: '13% – 18%',
      tag: 'Flexible Liquidity'
    },
    {
      id: 'jp-5l-40',
      name: 'Business Capital Chit',
      value: 500000,
      monthly: 12500,
      months: 40,
      category: 'long',
      maxDiscountPct: 40,
      estDividendRange: '15% – 21%',
      tag: 'MSME Favorite'
    },
    {
      id: 'jp-10l-40',
      name: 'Wealth Builder Chit',
      value: 1000000,
      monthly: 25000,
      months: 40,
      category: 'long',
      maxDiscountPct: 40,
      estDividendRange: '15% – 22%',
      tag: 'High Value'
    },
    {
      id: 'jp-25l-50',
      name: 'Enterprise & Property Chit',
      value: 2500000,
      monthly: 50000,
      months: 50,
      category: 'long',
      maxDiscountPct: 40,
      estDividendRange: '16% – 24%',
      tag: 'Premier Tier'
    }
  ];

  const PROCESS_STEPS = [
    {
      step: '01',
      title: 'Choose a Chit Group',
      summary: 'Select a chit value (₹1 Lakh to ₹25 Lakhs) and tenure that matches your monthly cash flow and financial goal.',
      detail: 'Complete simple KYC verification at our Malleshwaram branch (10/8 C, Pipeline Road, Basappa Garden) and receive your official subscriber passbook and schedule.'
    },
    {
      step: '02',
      title: 'Contribute Monthly Installment',
      summary: 'Every member pays the monthly subscription before the scheduled auction date—earning dividends from day one.',
      detail: 'When other members bid for the pool, the discount (minus the standard 5% foreman commission) is divided equally among all subscribers, reducing your net monthly outgo.'
    },
    {
      step: '03',
      title: 'Transparent Monthly Auction',
      summary: 'Need lump-sum funds early? Participate in the monthly auction by quoting a discount within the regulated cap.',
      detail: 'The highest discount bidder wins the prize amount. If multiple members quote the maximum discount, a fair draw of lots decides the prized subscriber.'
    },
    {
      step: '04',
      title: 'Prize Payout or Maturity Surplus',
      summary: 'Prized subscribers receive fast payout upon furnishing standard sureties; non-prized savers earn cumulative dividends.',
      detail: 'Whether you borrow early for business/emergencies or stay till the final months as a saver, every rupee is tracked transparently with clear receipts.'
    }
  ];

  const FAQS = [
    {
      q: 'Where is JP Chit Fund located and what are your working hours?',
      a: 'We are located at 10/8 C, Pipeline Road, Basappa Garden, Malleshwaram, Bengaluru, Karnataka 560003. Our office is open Monday through Sunday from 9:00 AM to 10:00 PM. You can also reach us directly at +91 93537 81216.'
    },
    {
      q: 'How is the monthly chit dividend calculated?',
      a: 'In any auction month, the bid discount offered by the winning subscriber (after deducting the standard 5% foreman commission) is distributed equally among all members of the group. Your net payable for that month equals the gross installment minus your dividend share.'
    },
    {
      q: 'Can I use a chit fund both for saving and for borrowing?',
      a: 'Yes. That dual flexibility is the core advantage of a chit fund. If you need lump-sum capital early for business expansion, education, or family milestones, you can bid in an auction. If you prefer to save, you can wait until later months and benefit from higher cumulative dividends.'
    },
    {
      q: 'What documents are required to join a chit group?',
      a: 'To enroll as a subscriber, you need basic KYC documents: Aadhaar Card, PAN Card, recent passport-size photograph, and address/income proof. When lifting a prized chit in an early month, standard guarantor or security documentation applies.'
    },
    {
      q: 'How do I enquire about currently open chit batches?',
      a: 'Use the enquiry form below or call +91 93537 81216 between 9:00 AM and 10:00 PM. Our Malleshwaram team will share the exact upcoming auction dates and available group slots.'
    }
  ];

  function formatINR(num) {
    return '₹' + Math.round(num).toLocaleString('en-IN');
  }

  // 1. Mobile Navigation
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  // 2. Render & Filter Chit Schemes
  let activeFilter = 'all';
  const schemesGrid = document.getElementById('schemes-grid');
  const filterButtons = document.querySelectorAll('[data-scheme-filter]');

  function renderSchemes() {
    if (!schemesGrid) return;
    const filtered = activeFilter === 'all'
      ? CHIT_PLANS
      : CHIT_PLANS.filter((p) => p.category === activeFilter);

    schemesGrid.innerHTML = filtered.map((plan) => `
      <article class="scheme-card bg-white rounded-2xl border border-[#E5DFD3] p-6 flex flex-col justify-between shadow-sm">
        <div>
          <div class="flex items-center justify-between gap-2 mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#E6F0EC] text-[#0F3D34]">
              ${plan.tag}
            </span>
            <span class="text-xs font-medium text-[#4A5754] tabular-nums">${plan.months} Months</span>
          </div>
          <h3 class="text-lg font-bold text-[#17201E] mb-1">${plan.name}</h3>
          <div class="text-3xl font-serif-display font-bold text-[#0F3D34] tabular-nums mb-5">
            ${formatINR(plan.value)}
          </div>
          <dl class="space-y-2.5 text-sm border-t border-[#F0ECE2] pt-4 mb-6">
            <div class="flex justify-between">
              <dt class="text-[#4A5754]">Gross Monthly Installment</dt>
              <dd class="font-semibold text-[#17201E] tabular-nums">${formatINR(plan.monthly)}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-[#4A5754]">Members / Tenure</dt>
              <dd class="font-semibold text-[#17201E] tabular-nums">${plan.months} Members</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-[#4A5754]">Indicative Dividend</dt>
              <dd class="font-semibold text-[#0F3D34] tabular-nums">${plan.estDividendRange}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="text-[#4A5754]">Max Auction Discount</dt>
              <dd class="font-semibold text-[#A87C32] tabular-nums">Up to ${plan.maxDiscountPct}%</dd>
            </div>
          </dl>
        </div>
        <button type="button" data-enquire-plan="${plan.id}"
          class="w-full py-3 px-4 rounded-xl bg-[#0F3D34] hover:bg-[#165246] text-white font-semibold text-sm transition cursor-pointer">
          Enquire This Plan
        </button>
      </article>
    `).join('');

    schemesGrid.querySelectorAll('[data-enquire-plan]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const plan = CHIT_PLANS.find((p) => p.id === btn.dataset.enquirePlan);
        if (!plan) return;
        const select = document.getElementById('enquiry-plan');
        const msg = document.getElementById('enquiry-message');
        if (select) select.value = `${formatINR(plan.value)} (${plan.months} Months)`;
        if (msg) msg.value = `I would like details on the ${plan.name} (${formatINR(plan.value)} / ${formatINR(plan.monthly)} per month for ${plan.months} months).`;
        const contactEl = document.getElementById('contact');
        if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        showToast(`Selected ${plan.name} — complete your details below.`);
      });
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.schemeFilter;
      filterButtons.forEach((b) => {
        const isActive = b.dataset.schemeFilter === activeFilter;
        b.className = isActive
          ? 'px-4 py-2 rounded-full text-sm font-semibold bg-[#0F3D34] text-white transition cursor-pointer'
          : 'px-4 py-2 rounded-full text-sm font-semibold bg-white text-[#4A5754] border border-[#E5DFD3] hover:border-[#0F3D34] transition cursor-pointer';
      });
      renderSchemes();
    });
  });

  // 3. Interactive Chit Calculator & Chart.js
  const calcAmountEl = document.getElementById('calc-amount');
  const calcMonthsEl = document.getElementById('calc-months');
  const calcDiscountEl = document.getElementById('calc-discount');
  const calcDiscountLabel = document.getElementById('calc-discount-label');
  const outGrossEl = document.getElementById('out-gross');
  const outDividendEl = document.getElementById('out-dividend');
  const outNetEl = document.getElementById('out-net');
  const outPrizeEl = document.getElementById('out-prize');
  let chitChart = null;

  function updateCalculator() {
    if (!calcAmountEl || !calcMonthsEl || !calcDiscountEl) return;
    const chitValue = Number(calcAmountEl.value) || 500000;
    const months = Number(calcMonthsEl.value) || 40;
    const discountPct = Number(calcDiscountEl.value) || 20;

    if (calcDiscountLabel) calcDiscountLabel.textContent = `${discountPct}%`;

    const foremanPct = 5;
    const grossMonthly = chitValue / months;
    const totalBidDiscount = chitValue * (discountPct / 100);
    const foremanCommission = chitValue * (foremanPct / 100);
    const distributableSurplus = Math.max(0, totalBidDiscount - foremanCommission);
    const dividendPerMember = distributableSurplus / months;
    const netMonthly = Math.max(0, grossMonthly - dividendPerMember);
    const prizeAmount = chitValue - totalBidDiscount;

    if (outGrossEl) outGrossEl.textContent = formatINR(grossMonthly);
    if (outDividendEl) outDividendEl.textContent = formatINR(dividendPerMember);
    if (outNetEl) outNetEl.textContent = formatINR(netMonthly);
    if (outPrizeEl) outPrizeEl.textContent = formatINR(prizeAmount);

    renderChart(chitValue, months);
  }

  function renderChart(chitValue, months) {
    const canvas = document.getElementById('chit-chart');
    if (!canvas || typeof Chart === 'undefined') return;

    const labels = ['Early Bid (30% Disc)', 'Mid Bid (18% Disc)', 'Late Bid (8% Disc)', 'Final Month (5% Comm)'];
    const discounts = [0.30, 0.18, 0.08, 0.05];
    const prizeData = discounts.map((d) => Math.round(chitValue * (1 - d)));
    const netMonthlyData = discounts.map((d) => {
      const gross = chitValue / months;
      const surplus = Math.max(0, chitValue * d - chitValue * 0.05);
      return Math.round(gross - surplus / months);
    });

    if (chitChart) {
      chitChart.data.labels = labels;
      chitChart.data.datasets[0].data = prizeData;
      chitChart.data.datasets[1].data = netMonthlyData;
      chitChart.update();
      return;
    }

    chitChart = new Chart(canvas.getContext('2d'), {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Prize Payout (₹)',
            data: prizeData,
            backgroundColor: '#0F3D34',
            borderRadius: 8
          },
          {
            label: 'Net Monthly Payable (₹)',
            data: netMonthlyData,
            backgroundColor: '#C69749',
            borderRadius: 8
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { boxWidth: 12, font: { family: 'Inter' } } }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (val) => '₹' + Number(val).toLocaleString('en-IN')
            }
          }
        }
      }
    });
  }

  [calcAmountEl, calcMonthsEl, calcDiscountEl].forEach((el) => {
    if (el) el.addEventListener('input', updateCalculator);
  });

  // 4. Interactive How It Works Stepper
  const stepsNav = document.getElementById('steps-nav');
  const stepDetailBox = document.getElementById('step-detail-box');
  let activeStepIdx = 0;

  function renderSteps() {
    if (!stepsNav || !stepDetailBox) return;
    stepsNav.innerHTML = PROCESS_STEPS.map((s, idx) => {
      const active = idx === activeStepIdx;
      return `
        <button type="button" data-step-idx="${idx}"
          class="text-left p-4 rounded-2xl border transition cursor-pointer ${
            active
              ? 'bg-[#0F3D34] text-white border-[#0F3D34] shadow-md'
              : 'bg-white text-[#17201E] border-[#E5DFD3] hover:border-[#C69749]'
          }">
          <div class="text-xs font-bold tracking-wider uppercase ${active ? 'text-[#E7C27D]' : 'text-[#A87C32]'} mb-1">
            Step ${s.step}
          </div>
          <div class="font-bold text-base">${s.title}</div>
        </button>
      `;
    }).join('');

    const current = PROCESS_STEPS[activeStepIdx];
    stepDetailBox.innerHTML = `
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8F0E0] text-[#A87C32] text-xs font-semibold mb-4">
        Step ${current.step} of 04
      </div>
      <h3 class="text-2xl font-serif-display font-bold text-[#17201E] mb-3">${current.title}</h3>
      <p class="text-[#17201E] font-medium mb-3 leading-relaxed">${current.summary}</p>
      <p class="text-[#4A5754] text-sm leading-relaxed">${current.detail}</p>
    `;

    stepsNav.querySelectorAll('[data-step-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeStepIdx = Number(btn.dataset.stepIdx);
        renderSteps();
      });
    });
  }

  // 5. FAQ Accordion
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.innerHTML = FAQS.map((item, idx) => `
      <div class="faq-item bg-white rounded-2xl border border-[#E5DFD3] overflow-hidden ${idx === 0 ? 'open' : ''}">
        <button type="button" class="faq-toggle w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer">
          <span class="font-semibold text-[#17201E] text-base">${item.q}</span>
          <span class="faq-chevron text-[#0F3D34] font-bold text-xl leading-none select-none">+</span>
        </button>
        <div class="faq-content px-6">
          <p class="pb-5 text-sm text-[#4A5754] leading-relaxed">${item.a}</p>
        </div>
      </div>
    `).join('');

    faqList.querySelectorAll('.faq-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.faq-item');
        if (parent) parent.classList.toggle('open');
      });
    });
  }

  // 6. Enquiry Form & Toast
  const enquiryForm = document.getElementById('enquiry-form');
  const formSuccessBanner = document.getElementById('form-success-banner');

  function showToast(message) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
    }, 3400);
  }

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('enquiry-name')?.value.trim() || 'Subscriber';
      const phone = document.getElementById('enquiry-phone')?.value.trim() || '';
      const plan = document.getElementById('enquiry-plan')?.value || 'General Enquiry';

      if (phone.length < 8) {
        showToast('Please enter a valid 10-digit phone number.');
        return;
      }

      if (formSuccessBanner) {
        formSuccessBanner.innerHTML = `
          <div class="font-semibold text-[#0F3D34]">Thank you, ${name}! Your callback request is noted.</div>
          <div class="text-xs text-[#4A5754] mt-1">Interested in: ${plan}. For immediate assistance, call <a href="tel:+919353781216" class="underline font-semibold">+91 93537 81216</a> (9:00 AM – 10:00 PM).</div>
        `;
        formSuccessBanner.classList.remove('hidden');
      }
      showToast('Enquiry recorded! Our Malleshwaram team will connect with you.');
      enquiryForm.reset();
    });
  }

  // Initialize
  renderSchemes();
  renderSteps();
  updateCalculator();
})();
