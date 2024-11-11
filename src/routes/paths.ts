const paths = {
  contacts: () => '/',
  notFound: () => '/404',
  serverError: () => '/500',
  contactID: (id: string) => `/contacts/${id}`,
};

export default paths;
