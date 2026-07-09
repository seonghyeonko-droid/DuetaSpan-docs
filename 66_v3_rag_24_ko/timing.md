# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: 우서 · Location: Busan, South Korea · Nationality: Korean · Gender: female · Age: 40s · TZ: Asia/Seoul (KST, UTC+9) · Currency: KRW (₩)
#   B. 저장 메모리:
#      [2026-06-21] User has a Poodle named Coco.
#      [2026-04-08] User is into marathon training.
#      [2026-03-20] User is vegan.
#      [2026-02-17] User's home address is 609 Oak Avenue.
#   B. 과거 대화 요약:
#      [2026-06-01] Apartment hunting downtown — wanted a pet-friendly building; budget for 2 bedrooms
#      [2026-05-21] Setting up a home network — asked about mesh routers; coverage for a 3-story house


     0.00s  user  발화 시작: 가족사를 조사하시다가 뒤 플레시라는 성을 발견하셨군요. 발음하기가 좀 어렵던데, 원래 어디에서 유래했는지 궁
     9.22s  <ret> 발화 (turn1 첫 프레임)
     9.54s  agent 발화 시작: <ret> 정말 좋은 질문이세요. 성을 추적하는 건 정말 보람 있는 일이에요. 뒤 플레시는 지명에서 유래한 
     9.64s  user  발화 끝
    10.58s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.79s]: The surname Du Plessis is of French origin, meaning “of Plessis”.
    17.19s  user  발화 시작: 예.
    17.68s  user  발화 끝
    19.60s  agent 발화 끝
    20.41s  user  발화 시작: 아, 프랑스군요! 흥미롭네요. 저는… 음, 다른 곳이라고 생각했거든요. 프랑스에서 흔한 성이었나요?
    28.87s  <ret> 발화 (turn4 첫 프레임)
    29.26s  agent 발화 시작: <ret> 생각하신 대로 어느 정도 맞는 것 같아요. 뒤 플레시 가문은 천육십육 년 윌리엄 정복왕과 함께 잉
    29.45s  user  발화 끝
    30.55s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.75s]: The Plessis family were Norman nobles who followed William the Conquer
    37.24s  user  발화 시작: 그러면 노르만족과 함께 잉글랜드로 왔군요? 사실 그게 많은 걸 설명해 주는 것 같아요. 거기서 멈췄나요, 아
    37.46s  agent 발화 끝
    46.60s  user  발화 끝
    46.72s  agent 발화 시작: 네, 결국 위그노들과 함께 남아프리카로 퍼져나갔습니다. 그들은 종교의 자유를 찾아 이름을 가져갔죠. 정말 회
    55.90s  agent 발화 끝
