declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * Push events to Google Tag Manager dataLayer
 */
export const trackEvent = (event: string, data?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event,
      ...data,
    });
    console.log('GTM Event Tracked:', event, data); // For debugging
  }
};

/**
 * Track form submissions
 */
export const trackFormSubmission = (formName: string, formData: any) => {
  trackEvent('form_submission', {
    form_name: formName,
    form_data: {
      company: formData.company,
      revenue: formData.revenue,
    },
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: location,
  });
};

/**
 * Track page sections viewed
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};

/**
 * Track WhatsApp clicks
 */
export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    source,
  });
};

/**
 * Track email clicks
 */
export const trackEmailClick = (source: string) => {
  trackEvent('email_click', {
    source,
  });
};

/**
 * Track navigation clicks
 */
export const trackNavigation = (destination: string) => {
  trackEvent('navigation_click', {
    destination,
  });
};
