# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "연희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 안녕하세요. 혹시 제가 전에 말씀드렸던 거 기억하세요? | S2 아, 그리고 강아지 모치 알레르기 때문에 차 안에 털이 많이  | S3 혹시 제가 전에 꽃가루 알레르기 있다고 말씀드렸었나요? | S4 십오만 원이면 괜찮네요.

     0.00s  agent 발화 시작: 안녕하세요, 연희님! 저는 크래온이라고 해요. 육아와 가족 시간을 도와드리는 에이전트입니다.
     0.00s  <ret> 발화 (turn3 첫 프레임)
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.00s  <ret> 발화 (turn8 첫 프레임)
     0.04s  user  발화 시작: 응응.
     0.04s  agent 발화 끝
     0.04s  user  발화 시작: 아, 안녕하세요. 혹시 제가 전에 말씀드렸던 거 기억하세요?
     0.04s  user  발화 끝
     0.07s  agent 발화 시작: <ret> 네, 연희님. 중고차, 특히 하이브리드 모델을 알아보고 계셨던 것 기억하고 있어요. 삼만 마일 미
     0.07s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: [2026-04-19] Past chat — Researching a used car: comparing hybrid mode
     0.07s  user  발화 끝
     0.13s  user  발화 시작: 맞아요, 맞아요. 혹시 요즘 괜찮은 모델이 있나요?
     0.13s  agent 발화 끝
     0.16s  agent 발화 시작: <ret> 이천이십사년식 토요타 프리우스 프라임이 이만 오천 마일에 이천 팔백만 원에 판매 중이라고 하네요.
     0.16s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) 2024년식 Toyota Prius Prime이 2만 5천 마일에 2천 8백만 원에 판매 중입니다. 
     0.16s  user  발화 끝
     0.21s  <ret> 발화 (turn16 첫 프레임)
     0.22s  user  발화 시작: 응.
     0.22s  agent 발화 끝
     0.23s  user  발화 시작: 프리우스는 전에 타본 적 있는데, 이번에는 다른 차종도 보고 싶어요.
     0.23s  user  발화 끝
     0.26s  agent 발화 시작: <ret> 이천이십오년식 현대 쏘나타 하이브리드가 이만 팔천 마일에 이천 오백만 원에 판매 중이라고 합니다.
     0.26s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 2025년식 Hyundai Sonata Hybrid가 2만 8천 마일에 2천 5백만 원에 판매 중입니
     0.26s  user  발화 끝
     0.33s  user  발화 시작: 헐.
     0.33s  agent 발화 끝
     0.33s  user  발화 시작: 쏘나타 하이브리드… 음, 한번 알아봐야겠네요.
     0.33s  user  발화 끝
     0.35s  agent 발화 시작: 쏘나타 하이브리드는 연비도 좋고, 공간도 넓어서 가족용으로 인기가 많아요.
     0.35s  user  발화 끝
     0.37s  <ret> 발화 (turn14 첫 프레임)
     0.38s  <ret> 발화 (turn21 첫 프레임)
     0.39s  user  발화 시작: 어.
     0.39s  agent 발화 끝
     0.39s  user  발화 시작: 아, 그리고 강아지 모치 알레르기 때문에 차 안에 털이 많이 날리는 차는 피해야 할 것 같아요.
     0.39s  user  발화 끝
     0.45s  agent 발화 시작: <ret> 아, 모치 알레르기가 있으셨군요. 차 안에 털이 많이 날리는 차는 피하는 게 좋겠네요. 털이 덜 
     0.45s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: [2025-09-07] User has a Corgi named Mochi.
     0.45s  user  발화 끝
     0.52s  user  발화 시작: 네, 부탁드려요.
     0.52s  agent 발화 끝
     0.53s  agent 발화 시작: <ret> 가죽 시트 차량은 천 시트 차량보다 털이 덜 붙는다고 하네요. 공기 청정 기능이 있는 차량도 도움
     0.53s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 가죽 시트 차량은 천 시트 차량보다 털이 덜 붙습니다. 또한, 공기 청정 기능이 있는 차량도 도움이 
     0.53s  user  발화 끝
     0.57s  <ret> 발화 (turn25 첫 프레임)
     0.60s  user  발화 시작: 응.
     0.60s  agent 발화 끝
     0.60s  user  발화 시작: 아, 가죽 시트는 좋은 생각이에요.
     0.60s  user  발화 끝
     0.62s  agent 발화 시작: 가죽 시트는 털 청소가 훨씬 쉽고, 알레르기 반응을 줄이는 데 도움이 될 수 있어요.
     0.62s  user  발화 끝
     0.67s  user  발화 시작: 혹시 제가 전에 꽃가루 알레르기 있다고 말씀드렸었나요?
     0.67s  agent 발화 끝
     0.70s  agent 발화 시작: <ret> 네, 연희님. 꽃가루 알레르기가 있으셨다고 말씀하셨었어요.
     0.70s  ⚡SPAN 주입 [d'=0.02s / d_lead=0.02s]: [2026-05-10] User is allergic to pollen.
     0.70s  user  발화 끝
     0.72s  user  발화 시작: 그치.
     0.72s  agent 발화 끝
     0.73s  user  발화 시작: 아, 그렇군요. 꽃가루 알레르기 때문에 차 안에서 공기 청정을 꼭 해야 할 것 같아요. —
     0.73s  user  발화 끝
     0.78s  user  발화 시작: …차량용 공기청정기 괜찮은 거 추천해 주실 수 있나요?
     0.78s  user  발화 끝
     0.81s  agent 발화 시작: <ret> 블루에어 차량용 공기청정기가 PM2.오 제거 성능이 뛰어나고, 필터 교체도 간편하다고 하네요. 가
     0.81s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) 블루에어 차량용 공기청정기가 PM2.5 제거 성능이 뛰어나고, 필터 교체도 간편합니다. 가격은 15만
     0.81s  user  발화 끝
     0.86s  user  발화 시작: 십오만 원이면 괜찮네요.
     0.86s  agent 발화 끝
     0.88s  agent 발화 시작: 차량용 공기청정기는 실내 공기 질을 개선하여 알레르기 증상을 완화하는 데 도움이 될 수 있어요.
     0.88s  user  발화 끝
     0.93s  user  발화 시작: 응.
     0.93s  agent 발화 끝
     0.93s  user  발화 시작: 아, 감사합니다. 덕분에 좋은 정보 많이 얻었어요.
     0.93s  user  발화 끝
     0.96s  agent 발화 시작: 도움이 되셨다니 기쁘네요.
     0.96s  user  발화 끝
     0.97s  user  발화 시작: 그럼, 이만 끊을게요.
     0.97s  agent 발화 끝
     0.98s  agent 발화 시작: 네, 연희님. 좋은 하루 보내세요!
     0.98s  user  발화 끝
     1.00s  agent 발화 끝
