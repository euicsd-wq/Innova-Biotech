@@ .. @@
 import QualityIcon from '../components/icons/QualityIcon';

-const PlatformReagentDetailPage: React.FC = () => {
+export default function PlatformReagentDetailPage() {
     const { slug } = useParams<{ slug: string }>();
     const reagent = reagentsData.find(r => r.slug === slug);

@@ .. @@
             <StickyCta />
         </div>
     );
-};
-
-export default PlatformReagentDetailPage;