const App = (() => {
  // ═══════════════════════════════════════
  //  i18n
  // ═══════════════════════════════════════
  const L10N = {
    en: {
      // nav
      navNew: 'New', navSave: 'Save', navHistory: 'History',
      navPrint: 'Print', navPDF: 'Export PDF', navUpgrade: 'Upgrade Pro',
      // form
      secDetails: 'Invoice Details', lblNumber: 'Invoice #', lblDate: 'Date',
      lblDue: 'Due Date', lblCurrency: 'Currency', lblTemplate: 'Template',
      tplModern: 'Modern', tplClassic: 'Classic', tplMinimal: 'Minimal',
      lblLogo: 'Company Logo', btnUpload: 'Click to upload', btnRemove: 'Remove',
      secFrom: 'From', secTo: 'Bill To',
      phName: 'Company / Name', phEmail: 'Email', phAddress: 'Address', phPhone: 'Phone',
      phClient: 'Client Name',
      secItems: 'Line Items', btnAddItem: '+ Add Item',
      colDesc: 'Description', colQty: 'Qty', colRate: 'Rate', colAmount: 'Amount',
      phItemDesc: 'Service description',
      lblTax: 'Tax Rate (%)', lblDiscount: 'Discount', lblDiscType: 'Discount Type',
      optFixed: 'Fixed Amount', optPercent: 'Percentage (%)',
      secNotes: 'Notes', phNotes: 'Payment terms, bank info, thank you message...',
      secPayment: 'Payment Info', lblPayMethod: 'Payment Method',
      optNone: '-- None --', optBank: 'Bank Transfer', optPaypal: 'PayPal', optOther: 'Other',
      phBankName: 'e.g. Chase Bank', phAccount: 'Account Number / IBAN',
      phSwift: 'SWIFT / BIC Code', phPaypalEmail: 'PayPal Email',
      phCustomPay: 'e.g. Venmo: @username, WeChat Pay: ...',
      // invoice
      invTitle: 'INVOICE', invFrom: 'From', invBillTo: 'Bill To',
      invDate: 'Date', invDue: 'Due',
      thDesc: 'Description', thQty: 'Qty', thRate: 'Rate', thAmount: 'Amount',
      lblSubtotal: 'Subtotal', lblTax_: 'Tax', lblDiscount_: 'Discount',
      lblTotal: 'Total', lblNotes: 'Notes',
      lblPayDetails: 'Payment Details',
      lblPayBank: 'Bank', lblPayAccount: 'Account', lblPaySwift: 'SWIFT',
      lblPayPaypal: 'PayPal',
      txtThanks: 'Thank you for your business!',
      txtWatermark: 'Created with BillCraft',
      // modals
      titlePlans: 'Choose Your Plan',
      planFree: 'Free', planPro: 'Pro', planTeam: 'Team',
      priceFree: '$0', pricePro: '$9.99', priceTeam: '$24.99',
      durFree: 'Free forever', durOnce: 'One-time purchase',
      freeF1: '3 invoices / month', freeF2: '1 template', freeF3: 'BillCraft watermark', freeF4: 'Print export',
      proF1: 'Unlimited invoices', proF2: 'All 3 templates', proF3: 'No watermark', proF4: 'PDF export',
      teamF1: 'All Pro features', teamF2: 'Team collaboration', teamF3: 'Brand customization', teamF4: 'Priority support',
      btnCurrent: 'Current Plan', btnBuy: 'Buy Now', btnContact: 'Contact Sales',
      badgeRec: 'Recommended',
      lblLicense: 'Already have a license key? Activate here:',
      phLicense: 'XXXX-XXXX-XXXX-XXXX', btnActivate: 'Activate',
      titleSaved: 'Saved Invoices', txtNoSaved: 'No saved invoices yet',
      txtUnnamed: 'Untitled', btnDelete: 'Delete',
      // toast
      toastSaved: 'Invoice saved', toastLoaded: 'Invoice loaded',
      toastNew: 'New invoice created', toastPro: 'Pro activated! Thank you!',
      toastBadKey: 'Invalid license key',
    },
    zh: {
      navNew: '新建', navSave: '保存', navHistory: '历史',
      navPrint: '打印', navPDF: '导出 PDF', navUpgrade: '升级 Pro',
      secDetails: '发票信息', lblNumber: '发票编号', lblDate: '开票日期',
      lblDue: '到期日期', lblCurrency: '币种', lblTemplate: '模板风格',
      tplModern: '现代', tplClassic: '经典', tplMinimal: '极简',
      lblLogo: '公司 Logo', btnUpload: '点击上传', btnRemove: '移除',
      secFrom: '发件方', secTo: '收件方',
      phName: '公司/个人名称', phEmail: '邮箱', phAddress: '地址', phPhone: '电话',
      phClient: '客户名称',
      secItems: '项目明细', btnAddItem: '+ 添加项目',
      colDesc: '描述', colQty: '数量', colRate: '单价', colAmount: '金额',
      phItemDesc: '服务描述',
      lblTax: '税率 (%)', lblDiscount: '折扣金额', lblDiscType: '折扣类型',
      optFixed: '固定金额', optPercent: '百分比 (%)',
      secNotes: '备注', phNotes: '付款方式、银行信息、感谢语等...',
      secPayment: '付款信息', lblPayMethod: '付款方式',
      optNone: '-- 无 --', optBank: '银行转账', optPaypal: 'PayPal', optOther: '其他',
      phBankName: '如：招商银行', phAccount: '账号 / IBAN',
      phSwift: 'SWIFT / BIC 代码', phPaypalEmail: 'PayPal 邮箱',
      phCustomPay: '如：支付宝 13800000000 / 微信 ...',
      invTitle: '发票', invFrom: '发件方', invBillTo: '收件方',
      invDate: '日期', invDue: '到期',
      thDesc: '描述', thQty: '数量', thRate: '单价', thAmount: '金额',
      lblSubtotal: '小计', lblTax_: '税费', lblDiscount_: '折扣',
      lblTotal: '合计', lblNotes: '备注',
      lblPayDetails: '付款信息',
      lblPayBank: '银行', lblPayAccount: '账号', lblPaySwift: 'SWIFT',
      lblPayPaypal: 'PayPal',
      txtThanks: '感谢您的惠顾！',
      txtWatermark: '由 BillCraft 制作',
      titlePlans: '选择适合你的方案',
      planFree: 'Free', planPro: 'Pro', planTeam: 'Team',
      priceFree: '$0', pricePro: '$9.99', priceTeam: '$24.99',
      durFree: '永久免费', durOnce: '一次性买断',
      freeF1: '每月 3 张发票', freeF2: '1 套模板', freeF3: 'BillCraft 水印', freeF4: '打印导出',
      proF1: '无限发票', proF2: '全部 3 套模板', proF3: '无水印', proF4: 'PDF 导出',
      teamF1: 'Pro 全部功能', teamF2: '团队协作', teamF3: '品牌定制', teamF4: '优先支持',
      btnCurrent: '当前方案', btnBuy: '立即购买', btnContact: '联系购买',
      badgeRec: '推荐',
      lblLicense: '已有许可证密钥？在这里激活：',
      phLicense: 'XXXX-XXXX-XXXX-XXXX', btnActivate: '激活',
      titleSaved: '已保存的发票', txtNoSaved: '还没有保存过发票',
      txtUnnamed: '未命名', btnDelete: '删除',
      toastSaved: '发票已保存', toastLoaded: '发票已加载',
      toastNew: '已创建新发票', toastPro: 'Pro 已激活！感谢购买',
      toastBadKey: '许可证密钥无效',
    }
  };

  let lang = localStorage.getItem('billcraft_lang') || 'en';
  function t(key) { return (L10N[lang] && L10N[lang][key]) || (L10N.en[key]) || key; }

  function setLang(l) {
    lang = l;
    localStorage.setItem('billcraft_lang', l);
    applyI18n();
    update();
  }

  function applyI18n() {
    document.querySelectorAll('[data-t]').forEach(el => {
      const k = el.dataset.t;
      if (el.tagName === 'OPTION') el.textContent = t(k);
      else el.textContent = t(k);
    });
    document.querySelectorAll('[data-t-ph]').forEach(el => {
      el.placeholder = t(el.dataset.tPh);
    });
    document.getElementById('lang-switch').value = lang;
    renderPricingModal();
    renderSavedModal();
  }

  // ═══════════════════════════════════════
  //  State
  // ═══════════════════════════════════════
  const CURRENCIES = {
    USD: { sym: '$', dec: 2 }, EUR: { sym: '€', dec: 2 }, GBP: { sym: '£', dec: 2 },
    CNY: { sym: '¥', dec: 2 }, JPY: { sym: '¥', dec: 0 }, KRW: { sym: '₩', dec: 0 },
    HKD: { sym: 'HK$', dec: 2 }
  };

  let state = {
    template: 'modern',
    logo: null,
    pro: localStorage.getItem('billcraft_pro') === 'true',
    items: [{ description: '', quantity: 1, rate: 0 }]
  };

  function isPro() { return state.pro; }

  // ═══════════════════════════════════════
  //  License
  // ═══════════════════════════════════════
  const CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function validateLicenseKey(key) {
    const k = key.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
    if (k.length !== 16) return false;
    let h = 5381;
    for (let i = 0; i < 14; i++) h = ((h << 5) + h + k.charCodeAt(i)) & 0xFFFFFFFF;
    const v = (h & 0xFFFF) % 1296;
    return k[14] === CHARS[Math.floor(v / 36)] && k[15] === CHARS[v % 36];
  }
  function activateLicense(key) {
    if (validateLicenseKey(key)) {
      state.pro = true;
      localStorage.setItem('billcraft_pro', 'true');
      syncProBadges(); update();
      showToast(t('toastPro'));
      closePricing();
      return true;
    }
    showToast(t('toastBadKey'));
    return false;
  }

  // ═══════════════════════════════════════
  //  Helpers
  // ═══════════════════════════════════════
  function val(id) { return document.getElementById(id)?.value || ''; }
  function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }
  function nl2br(s) { return esc(s).replace(/\n/g, '<br>'); }

  function money(amount, code) {
    const c = CURRENCIES[code] || CURRENCIES.USD;
    const abs = Math.abs(amount).toFixed(c.dec);
    return amount < 0 ? `-${c.sym}${abs}` : `${c.sym}${abs}`;
  }

  function getState() {
    return {
      number: val('inv-number'), date: val('inv-date'), dueDate: val('inv-due'),
      currency: val('inv-currency'), template: state.template, logo: state.logo, lang,
      from: { name: val('from-name'), email: val('from-email'), address: val('from-address'), phone: val('from-phone') },
      to: { name: val('to-name'), email: val('to-email'), address: val('to-address'), phone: val('to-phone') },
      items: state.items,
      taxRate: parseFloat(val('inv-tax')) || 0,
      discount: parseFloat(val('inv-discount')) || 0,
      discountType: val('discount-type'),
      notes: val('inv-notes'),
      payment: {
        method: val('pay-method'),
        bankName: val('pay-bank-name'), account: val('pay-account'), swift: val('pay-swift'),
        paypalEmail: val('pay-paypal-email'), custom: val('pay-custom')
      }
    };
  }

  function calcTotals(data) {
    let subtotal = 0;
    for (const it of data.items) subtotal += (parseFloat(it.quantity) || 0) * (parseFloat(it.rate) || 0);
    let discAmt = 0;
    if (data.discount > 0) discAmt = data.discountType === 'percent' ? subtotal * data.discount / 100 : data.discount;
    const after = subtotal - discAmt;
    const tax = after * data.taxRate / 100;
    return { subtotal, discAmt, after, tax, total: after + tax };
  }

  // ═══════════════════════════════════════
  //  Invoice rendering
  // ═══════════════════════════════════════
  function renderPreview() {
    const data = getState();
    const totals = calcTotals(data);
    document.getElementById('invoice-preview').innerHTML = buildInvoice(data, totals);
  }

  function buildInvoice(d, tot) {
    const c = CURRENCIES[d.currency] || CURRENCIES.USD;
    const sym = c.sym;
    const logoHTML = d.logo ? `<img src="${d.logo}" style="max-height:52px;max-width:150px;object-fit:contain" alt="Logo">` : '';
    const rows = d.items.map(it => {
      const q = parseFloat(it.quantity) || 0, r = parseFloat(it.rate) || 0;
      return `<tr>
        <td class="inv-cell">${esc(it.description) || '<span style="color:#94a3b8">—</span>'}</td>
        <td class="inv-cell" style="text-align:right">${q}</td>
        <td class="inv-cell" style="text-align:right">${sym}${r.toFixed(c.dec)}</td>
        <td class="inv-cell" style="text-align:right;font-weight:600">${sym}${(q * r).toFixed(c.dec)}</td>
      </tr>`;
    }).join('');
    const totalsHTML = buildTotals(d, tot, sym, c.dec);
    const payHTML = buildPayment(d, c);
    if (d.template === 'classic') return tplClassic(d, logoHTML, rows, totalsHTML, payHTML, sym, c);
    if (d.template === 'minimal') return tplMinimal(d, logoHTML, rows, totalsHTML, payHTML, sym, c);
    return tplModern(d, logoHTML, rows, totalsHTML, payHTML, sym, c);
  }

  function partyHTML(label, p) {
    return `<div style="font-size:10.5px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:6px;font-weight:600">${label}</div>
      <div style="font-size:14px;font-weight:600">${esc(p.name)}</div>
      ${p.email ? `<div style="font-size:12.5px;color:#64748b;margin-top:1px">${esc(p.email)}</div>` : ''}
      ${p.address ? `<div style="font-size:12.5px;color:#64748b;white-space:pre-line">${nl2br(p.address)}</div>` : ''}
      ${p.phone ? `<div style="font-size:12.5px;color:#64748b">${esc(p.phone)}</div>` : ''}`;
  }

  function buildTotals(d, tot, sym, dec) {
    const r = [];
    r.push(row(t('lblSubtotal'), `${sym}${tot.subtotal.toFixed(dec)}`));
    if (tot.discAmt > 0) {
      const label = d.discountType === 'percent' ? `${t('lblDiscount_')} (${d.discount}%)` : t('lblDiscount_');
      r.push(row(label, `-${sym}${tot.discAmt.toFixed(dec)}`, '#ef4444'));
    }
    if (d.taxRate > 0) r.push(row(`${t('lblTax_')} (${d.taxRate}%)`, `${sym}${tot.tax.toFixed(dec)}`));
    r.push(`<div style="display:flex;justify-content:space-between;padding:12px 0;margin-top:6px;border-top:2px solid #1e293b;font-size:18px;font-weight:700;color:#1e293b"><span>${t('lblTotal')}</span><span>${sym}${tot.total.toFixed(dec)}</span></div>`);
    return `<div style="max-width:280px;margin-left:auto">${r.join('')}</div>`;
  }
  function row(l, v, color) {
    const c = color || '#475569';
    return `<div style="display:flex;justify-content:space-between;padding:3px 0;font-size:12.5px;color:${c}"><span>${l}</span><span>${v}</span></div>`;
  }

  function buildPayment(d) {
    const pm = d.payment;
    if (!pm || !pm.method || pm.method === '') return '';
    const lines = [];
    if (pm.method === 'bank') {
      if (pm.bankName) lines.push(`${t('lblPayBank')}: ${esc(pm.bankName)}`);
      if (pm.account) lines.push(`${t('lblPayAccount')}: ${esc(pm.account)}`);
      if (pm.swift) lines.push(`${t('lblPaySwift')}: ${esc(pm.swift)}`);
    } else if (pm.method === 'paypal') {
      if (pm.paypalEmail) lines.push(`${t('lblPayPaypal')}: ${esc(pm.paypalEmail)}`);
    } else if (pm.method === 'other') {
      if (pm.custom) lines.push(nl2br(pm.custom));
    }
    if (lines.length === 0) return '';
    return `<div style="margin-top:20px;padding-top:14px;border-top:1px solid #e2e8f0">
      <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:6px;font-weight:600">${t('lblPayDetails')}</div>
      <div style="font-size:12px;color:#475569;line-height:1.7">${lines.join('<br>')}</div>
    </div>`;
  }

  function watermark() { return !state.pro ? `<div style="text-align:center;margin-top:8px;font-size:9px;color:#cbd5e1">${t('txtWatermark')}</div>` : ''; }

  // --- Modern template ---
  function tplModern(d, logo, rows, totals, pay) {
    return `<div style="padding:44px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1e293b">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:36px">
        <div>${logo}</div>
        <div style="text-align:right"><div style="font-size:30px;font-weight:800;color:#4f46e5;letter-spacing:-0.5px">${t('invTitle')}</div><div style="font-size:13px;color:#64748b;margin-top:3px">#${esc(d.number)}</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:32px;gap:28px">
        <div style="flex:1">${partyHTML(t('invFrom'), d.from)}</div>
        <div style="flex:1">${partyHTML(t('invBillTo'), d.to)}</div>
        <div style="flex:1;text-align:right">
          <div style="margin-bottom:6px"><span style="font-size:11px;color:#94a3b8">${t('invDate')}：</span><span style="font-size:13px">${esc(d.date)}</span></div>
          <div><span style="font-size:11px;color:#94a3b8">${t('invDue')}：</span><span style="font-size:13px">${esc(d.dueDate)}</span></div>
        </div>
      </div>
      ${itemTable(rows)}
      ${totals}
      ${d.notes ? `<div style="margin-top:24px;padding-top:16px;border-top:1px solid #e2e8f0"><div style="font-size:10.5px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;margin-bottom:6px;font-weight:600">${t('lblNotes')}</div><div style="font-size:12.5px;color:#64748b;white-space:pre-line">${nl2br(d.notes)}</div></div>` : ''}
      ${pay}
      <div style="text-align:center;margin-top:40px;font-size:12.5px;color:#94a3b8">${t('txtThanks')}</div>
      ${watermark()}
    </div>`;
  }

  // --- Classic template ---
  function tplClassic(d, logo, rows, totals, pay) {
    return `<div style="padding:44px;font-family:Georgia,'Times New Roman',serif;color:#1e293b;border:3px double #334155">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:32px;padding-bottom:20px;border-bottom:2px solid #334155">
        <div>${logo}</div>
        <div style="text-align:right"><div style="font-size:26px;font-weight:bold;color:#334155;letter-spacing:2px">${t('invTitle')}</div><div style="font-size:12px;color:#64748b;margin-top:2px">#${esc(d.number)}</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-bottom:28px">
        <div style="width:45%">${partyHTML(t('invFrom'), d.from)}</div>
        <div style="width:45%">${partyHTML(t('invBillTo'), d.to)}</div>
      </div>
      <div style="display:flex;gap:20px;margin-bottom:20px;font-size:12.5px;color:#475569"><span><strong>${t('invDate')}：</strong>${esc(d.date)}</span><span><strong>${t('invDue')}：</strong>${esc(d.dueDate)}</span></div>
      ${itemTableClassic(rows)}
      ${totals}
      ${d.notes ? `<div style="margin-top:24px;padding-top:14px;border-top:1px solid #cbd5e1"><div style="font-size:10.5px;text-transform:uppercase;letter-spacing:2px;color:#64748b;margin-bottom:6px;font-weight:bold">${t('lblNotes')}</div><div style="font-size:12.5px;color:#475569;white-space:pre-line">${nl2br(d.notes)}</div></div>` : ''}
      ${pay}
      <div style="text-align:center;margin-top:36px;font-size:13px;color:#64748b;font-style:italic">${t('txtThanks')}</div>
      ${watermark()}
    </div>`;
  }

  // --- Minimal template ---
  function tplMinimal(d, logo, rows, totals, pay) {
    return `<div style="padding:44px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#1e293b">
      <div style="margin-bottom:40px">
        <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:3px;color:#94a3b8;margin-bottom:14px">${esc(d.number)}</div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div>${logo || `<div style="font-size:19px;font-weight:300;color:#1e293b">${esc(d.from.name) || 'Your Company'}</div>`}</div>
          <div style="text-align:right;font-size:12.5px;color:#64748b"><div>${esc(d.date)}</div><div>${t('invDue')} ${esc(d.dueDate)}</div></div>
        </div>
      </div>
      <div style="margin-bottom:32px;font-size:12.5px;color:#64748b">
        <div style="font-size:10.5px;text-transform:uppercase;letter-spacing:2px;margin-bottom:6px;color:#94a3b8">${t('invBillTo')}</div>
        <div style="font-size:14.5px;font-weight:600;color:#1e293b">${esc(d.to.name)}</div>
        ${d.to.email ? `<div>${esc(d.to.email)}</div>` : ''}
        ${d.to.address ? `<div style="white-space:pre-line">${nl2br(d.to.address)}</div>` : ''}
      </div>
      ${itemTableMinimal(rows)}
      ${totals}
      ${d.notes ? `<div style="margin-top:28px;font-size:11.5px;color:#94a3b8;white-space:pre-line">${nl2br(d.notes)}</div>` : ''}
      ${pay}
      ${watermark()}
    </div>`;
  }

  function itemTable(rows) {
    return `<table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-bottom:20px"><thead><tr style="background:#f8fafc">
      <th class="inv-th">${t('thDesc')}</th><th class="inv-th" style="text-align:right">${t('thQty')}</th>
      <th class="inv-th" style="text-align:right">${t('thRate')}</th><th class="inv-th" style="text-align:right">${t('thAmount')}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
  }
  function itemTableClassic(rows) {
    return `<table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-bottom:20px"><thead><tr style="background:#334155;color:#f8fafc">
      <th style="padding:9px 11px;text-align:left">${t('thDesc')}</th><th style="padding:9px 11px;text-align:right">${t('thQty')}</th>
      <th style="padding:9px 11px;text-align:right">${t('thRate')}</th><th style="padding:9px 11px;text-align:right">${t('thAmount')}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
  }
  function itemTableMinimal(rows) {
    return `<table style="width:100%;border-collapse:collapse;font-size:12.5px;margin-bottom:20px"><thead><tr>
      <th class="inv-th-min">${t('thDesc')}</th><th class="inv-th-min" style="text-align:right">${t('thQty')}</th>
      <th class="inv-th-min" style="text-align:right">${t('thRate')}</th><th class="inv-th-min" style="text-align:right">${t('thAmount')}</th>
    </tr></thead><tbody>${rows}</tbody></table>`;
  }

  // ═══════════════════════════════════════
  //  Line items
  // ═══════════════════════════════════════
  function renderItems() {
    const cur = val('inv-currency');
    const c = CURRENCIES[cur] || CURRENCIES.USD;
    const tbody = document.getElementById('items-body');
    tbody.innerHTML = state.items.map((it, i) => {
      const q = parseFloat(it.quantity) || 0, r = parseFloat(it.rate) || 0;
      return `<tr class="hover:bg-slate-50">
        <td class="py-1 px-2"><input type="text" value="${esc(it.description)}" class="field-input-sm" placeholder="${t('phItemDesc')}" oninput="App.updateItem(${i},'description',this.value)"></td>
        <td class="py-1 px-2"><input type="number" value="${it.quantity}" min="0" step="1" class="field-input-sm text-right" oninput="App.updateItem(${i},'quantity',this.value)"></td>
        <td class="py-1 px-2"><input type="number" value="${it.rate}" min="0" step="0.01" class="field-input-sm text-right" oninput="App.updateItem(${i},'rate',this.value)"></td>
        <td class="py-1 px-2 text-right font-medium text-slate-700 amt-cell">${c.sym}${(q * r).toFixed(c.dec)}</td>
        <td class="py-1 px-1"><button onclick="App.removeItem(${i})" class="text-slate-300 hover:text-red-500 transition ${state.items.length <= 1 ? 'invisible' : ''}">&times;</button></td>
      </tr>`;
    }).join('');
  }

  function addItem() { state.items.push({ description: '', quantity: 1, rate: 0 }); renderItems(); update(); }
  function removeItem(i) { if (state.items.length <= 1) return; state.items.splice(i, 1); renderItems(); update(); }
  function updateItem(i, field, val_) { state.items[i][field] = val_; updateItemAmount(i); update(); }
  function updateItemAmount(i) {
    const q = parseFloat(state.items[i].quantity) || 0, r = parseFloat(state.items[i].rate) || 0;
    const c = CURRENCIES[val('inv-currency')] || CURRENCIES.USD;
    const row = document.getElementById('items-body').children[i];
    if (row) row.children[3].textContent = `${c.sym}${(q * r).toFixed(c.dec)}`;
  }
  function updateAllAmounts() { for (let i = 0; i < state.items.length; i++) updateItemAmount(i); }

  // ═══════════════════════════════════════
  //  Template / Logo
  // ═══════════════════════════════════════
  function setTemplate(tpl) {
    if (tpl !== 'modern' && !isPro()) { showPricing(); return; }
    state.template = tpl;
    document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tpl-' + tpl)?.classList.add('active');
    update();
  }
  function uploadLogo(e) {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => { state.logo = ev.target.result; document.getElementById('logo-preview').innerHTML = `<img src="${state.logo}" class="w-full h-full object-contain rounded-lg">`; update(); };
    r.readAsDataURL(f);
  }
  function removeLogo() { state.logo = null; document.getElementById('logo-preview').innerHTML = t('btnUpload'); document.getElementById('logo-upload').value = ''; update(); }

  // ═══════════════════════════════════════
  //  Payment method toggle
  // ═══════════════════════════════════════
  function togglePaymentFields() {
    const m = val('pay-method');
    document.getElementById('pay-bank-fields').classList.toggle('hidden', m !== 'bank');
    document.getElementById('pay-paypal-fields').classList.toggle('hidden', m !== 'paypal');
    document.getElementById('pay-other-fields').classList.toggle('hidden', m !== 'other');
    update();
  }

  // ═══════════════════════════════════════
  //  Export
  // ═══════════════════════════════════════
  function exportPDF() {
    const preview = document.getElementById('invoice-preview');
    const btn = document.querySelector('.btn-primary');
    const orig = btn.textContent; btn.textContent = '...'; btn.disabled = true;
    html2canvas(preview, { scale: 2, useCORS: true, backgroundColor: '#fff' }).then(canvas => {
      const { jsPDF } = window.jspdf;
      const pdf = new jsPDF('p', 'mm', 'a4');
      const w = pdf.internal.pageSize.getWidth();
      const h = canvas.height * w / canvas.width;
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, w, h);
      pdf.save(`${val('inv-number') || 'invoice'}.pdf`);
    }).catch(() => alert('PDF export failed. Try Print instead.')).finally(() => { btn.textContent = orig; btn.disabled = false; });
  }
  function printInvoice() {
    const html = document.getElementById('invoice-preview').innerHTML;
    const w = window.open('', '_blank');
    w.document.write(`<!DOCTYPE html><html><head><title>Invoice</title><style>body{margin:0;display:flex;justify-content:center}@media print{@page{margin:0}}</style></head><body>${html}<script>window.onload=()=>window.print()<\/script></body></html>`);
    w.document.close();
  }

  // ═══════════════════════════════════════
  //  Persistence
  // ═══════════════════════════════════════
  function update() { updateAllAmounts(); renderPreview(); saveDraft(); }

  function saveDraft() { try { localStorage.setItem('billcraft_draft', JSON.stringify(getState())); } catch(e) {} }

  function loadDraft() {
    try {
      const raw = localStorage.getItem('billcraft_draft'); if (!raw) return;
      const d = JSON.parse(raw);
      if (d.number) document.getElementById('inv-number').value = d.number;
      if (d.date) document.getElementById('inv-date').value = d.date;
      if (d.dueDate) document.getElementById('inv-due').value = d.dueDate;
      if (d.currency) document.getElementById('inv-currency').value = d.currency;
      if (d.lang) lang = d.lang;
      const setField = (id, v) => { if (v) document.getElementById(id).value = v; };
      if (d.from) { setField('from-name', d.from.name); setField('from-email', d.from.email); setField('from-address', d.from.address); setField('from-phone', d.from.phone); }
      if (d.to) { setField('to-name', d.to.name); setField('to-email', d.to.email); setField('to-address', d.to.address); setField('to-phone', d.to.phone); }
      if (d.items?.length) state.items = d.items;
      setField('inv-tax', d.taxRate); setField('inv-discount', d.discount);
      if (d.discountType) document.getElementById('discount-type').value = d.discountType;
      setField('inv-notes', d.notes);
      if (d.template) { state.template = d.template; document.querySelectorAll('.tpl-btn').forEach(b => b.classList.remove('active')); document.getElementById('tpl-' + d.template)?.classList.add('active'); }
      if (d.logo) { state.logo = d.logo; document.getElementById('logo-preview').innerHTML = `<img src="${d.logo}" class="w-full h-full object-contain rounded-lg">`; }
      if (d.payment) {
        setField('pay-method', d.payment.method);
        setField('pay-bank-name', d.payment.bankName);
        setField('pay-account', d.payment.account);
        setField('pay-swift', d.payment.swift);
        setField('pay-paypal-email', d.payment.paypalEmail);
        setField('pay-custom', d.payment.custom);
        togglePaymentFields();
      }
    } catch(e) {}
  }

  function nextInvoiceNumber() {
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem('billcraft_saved') || '[]'); } catch(e) {}
    let max = 0;
    saved.forEach(s => { const m = (s.number || '').match(/INV-(\d+)/); if (m) max = Math.max(max, parseInt(m[1])); });
    return 'INV-' + String(max + 1).padStart(3, '0');
  }

  function saveInvoice() {
    const data = getState(); data.savedAt = new Date().toISOString(); data.id = Date.now();
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem('billcraft_saved') || '[]'); } catch(e) {}
    saved.unshift(data); if (saved.length > 50) saved = saved.slice(0, 50);
    try { localStorage.setItem('billcraft_saved', JSON.stringify(saved)); } catch(e) {}
    showToast(t('toastSaved'));
  }

  function newInvoice() {
    document.getElementById('inv-number').value = nextInvoiceNumber();
    document.getElementById('inv-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('inv-due').value = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
    ['from-name','from-email','from-address','from-phone','to-name','to-email','to-address','to-phone','inv-notes'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('inv-tax').value = '0'; document.getElementById('inv-discount').value = '0';
    document.getElementById('pay-method').value = '';
    ['pay-bank-name','pay-account','pay-swift','pay-paypal-email','pay-custom'].forEach(id => document.getElementById(id).value = '');
    togglePaymentFields();
    state.items = [{ description: '', quantity: 1, rate: 0 }];
    removeLogo(); renderItems(); update();
    showToast(t('toastNew'));
  }

  // ═══════════════════════════════════════
  //  Saved invoices modal
  // ═══════════════════════════════════════
  function showSavedModal() {
    document.getElementById('saved-modal').classList.remove('hidden');
    renderSavedModal();
  }
  function renderSavedModal() {
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem('billcraft_saved') || '[]'); } catch(e) {}
    const list = document.getElementById('saved-list');
    const noEl = document.getElementById('no-saved');
    if (!saved.length) { list.innerHTML = ''; noEl.classList.remove('hidden'); return; }
    noEl.classList.add('hidden');
    list.innerHTML = saved.map((s, i) => {
      const tot = calcTotals(s).total;
      return `<div class="flex items-center justify-between p-3 bg-white rounded-lg border hover:border-brand-300 transition cursor-pointer" onclick="App.loadSaved(${i})">
        <div><div class="font-medium text-sm">${esc(s.number || t('txtUnnamed'))}</div><div class="text-xs text-slate-400">${esc(s.to?.name || '—')} &middot; ${esc(s.date || '')}</div></div>
        <div class="flex items-center gap-2"><span class="text-sm font-semibold text-brand-600">${money(tot, s.currency)}</span><button onclick="event.stopPropagation();App.deleteSaved(${i})" class="text-xs text-slate-400 hover:text-red-500">${t('btnDelete')}</button></div>
      </div>`;
    }).join('');
  }
  function loadSaved(i) {
    let saved = []; try { saved = JSON.parse(localStorage.getItem('billcraft_saved') || '[]'); } catch(e) {}
    const d = saved[i]; if (!d) return;
    const setField = (id, v) => { document.getElementById(id).value = v || ''; };
    setField('inv-number', d.number); setField('inv-date', d.date); setField('inv-due', d.dueDate);
    setField('inv-currency', d.currency || 'USD');
    if (d.from) { setField('from-name', d.from.name); setField('from-email', d.from.email); setField('from-address', d.from.address); setField('from-phone', d.from.phone); }
    if (d.to) { setField('to-name', d.to.name); setField('to-email', d.to.email); setField('to-address', d.to.address); setField('to-phone', d.to.phone); }
    state.items = d.items || [{ description: '', quantity: 1, rate: 0 }];
    setField('inv-tax', d.taxRate); setField('inv-discount', d.discount);
    setField('discount-type', d.discountType || 'amount'); setField('inv-notes', d.notes);
    if (d.template) setTemplate(d.template);
    if (d.logo) { state.logo = d.logo; document.getElementById('logo-preview').innerHTML = `<img src="${d.logo}" class="w-full h-full object-contain rounded-lg">`; }
    if (d.payment) { setField('pay-method', d.payment.method); setField('pay-bank-name', d.payment.bankName); setField('pay-account', d.payment.account); setField('pay-swift', d.payment.swift); setField('pay-paypal-email', d.payment.paypalEmail); setField('pay-custom', d.payment.custom); togglePaymentFields(); }
    renderItems(); update(); closeSavedModal(); showToast(t('toastLoaded'));
  }
  function deleteSaved(i) {
    let saved = []; try { saved = JSON.parse(localStorage.getItem('billcraft_saved') || '[]'); } catch(e) {}
    saved.splice(i, 1);
    try { localStorage.setItem('billcraft_saved', JSON.stringify(saved)); } catch(e) {}
    renderSavedModal();
  }
  function closeSavedModal() { document.getElementById('saved-modal').classList.add('hidden'); }

  // ═══════════════════════════════════════
  //  Pricing modal
  // ═══════════════════════════════════════
  function showPricing() { document.getElementById('pricing-modal').classList.remove('hidden'); renderPricingModal(); }
  function closePricing() { document.getElementById('pricing-modal').classList.add('hidden'); }
  function renderPricingModal() {
    const el = document.getElementById('pricing-body');
    if (!el) return;
    const features = (keys) => keys.map(k => `<li class="flex items-center gap-2"><span class="text-emerald-500">&#10003;</span> ${t(k)}</li>`).join('');
    el.innerHTML = `
      <div class="border rounded-xl p-6 text-center">
        <h3 class="font-bold text-lg text-slate-700">${t('planFree')}</h3>
        <div class="text-3xl font-bold text-slate-800 my-4">${t('priceFree')}</div>
        <p class="text-sm text-slate-500 mb-4">${t('durFree')}</p>
        <ul class="text-sm text-left space-y-2 mb-6">${features(['freeF1','freeF2','freeF3','freeF4'])}</ul>
        <button class="w-full py-2 rounded-lg border border-slate-300 text-slate-600 font-medium">${t('btnCurrent')}</button>
      </div>
      <div class="border-2 border-brand-500 rounded-xl p-6 text-center relative">
        <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">${t('badgeRec')}</div>
        <h3 class="font-bold text-lg text-brand-700">${t('planPro')}</h3>
        <div class="text-3xl font-bold text-slate-800 my-4">${t('pricePro')}</div>
        <p class="text-sm text-slate-500 mb-4">${t('durOnce')}</p>
        <ul class="text-sm text-left space-y-2 mb-6">${features(['proF1','proF2','proF3','proF4'])}</ul>
        <button class="w-full py-2 rounded-lg bg-brand-600 text-white font-medium hover:bg-brand-700 transition" onclick="console.log('Redirect to payment: Pro $9.99')">${t('btnBuy')}</button>
      </div>
      <div class="border rounded-xl p-6 text-center">
        <h3 class="font-bold text-lg text-slate-700">${t('planTeam')}</h3>
        <div class="text-3xl font-bold text-slate-800 my-4">${t('priceTeam')}</div>
        <p class="text-sm text-slate-500 mb-4">${t('durOnce')}</p>
        <ul class="text-sm text-left space-y-2 mb-6">${features(['teamF1','teamF2','teamF3','teamF4'])}</ul>
        <button class="w-full py-2 rounded-lg border border-slate-300 text-slate-600 font-medium hover:bg-slate-50 transition" onclick="console.log('Redirect to payment: Team $24.99')">${t('btnContact')}</button>
      </div>`;
  }

  // ═══════════════════════════════════════
  //  Pro badges
  // ═══════════════════════════════════════
  function syncProBadges() {
    document.querySelectorAll('.tpl-pro-badge').forEach(b => b.style.display = isPro() ? 'none' : '');
  }

  // ═══════════════════════════════════════
  //  Toast
  // ═══════════════════════════════════════
  function showToast(msg) {
    const el = document.createElement('div');
    el.textContent = msg;
    el.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1e293b;color:#fff;padding:10px 24px;border-radius:8px;font-size:14px;z-index:9999;opacity:0;transition:opacity .3s';
    document.body.appendChild(el);
    requestAnimationFrame(() => el.style.opacity = '1');
    setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 2000);
  }

  // ═══════════════════════════════════════
  //  Init
  // ═══════════════════════════════════════
  function init() {
    document.getElementById('inv-date').value = new Date().toISOString().split('T')[0];
    document.getElementById('inv-due').value = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0];
    loadDraft();
    document.getElementById('lang-switch').value = lang;
    renderItems(); applyI18n(); update(); syncProBadges();
  }

  document.addEventListener('DOMContentLoaded', init);
  document.addEventListener('click', e => {
    if (e.target.id === 'pricing-modal') closePricing();
    if (e.target.id === 'saved-modal') closeSavedModal();
  });

  return {
    update, addItem, removeItem, updateItem, setTemplate,
    uploadLogo, removeLogo, exportPDF, printInvoice,
    isPro, activateLicense,
    saveInvoice, newInvoice, showSavedModal, loadSaved, deleteSaved, closeSavedModal,
    showPricing, closePricing,
    setLang, togglePaymentFields
  };
})();
