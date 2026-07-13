# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Riley",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 심리 상담사 덴버 콜로라도에서 찾아야 하는데, 현금으로 결제할 | S2 칠월 십칠일은 좀 멀다. 더 빨리 예약 가능한 다른 곳은 없어 | S3 생각보다 좀 비싸네. | S4 훨씬 합리적인 것 같아. 전화번호 좀 알려줄래?

     0.00s  user  발화 시작: 심리 상담사 덴버 콜로라도에서 찾아야 하는데, 현금으로 결제할 수 있으면 좋겠어.
     5.18s  agent 발화 시작: 예.
     5.18s  user  발화 끝
     5.64s  <ret> 발화 (turn2 첫 프레임)
     5.66s  agent 발화 시작: <ret> 음, 덴버에서 불안, 우울증, 트라우마를 전문으로 하는 엘리너 밴스 박사님을 찾았는데, 전화번호는
     5.66s  agent 발화 끝
     5.94s  ⚡SPAN 주입 [d'=0.30s / d_lead=10.37s]: (tool result) {"provider name": "Dr. Eleanor Vance", "address": "1600 
    16.02s  user  발화 시작: 음.
    16.02s  agent 발화 끝
    16.49s  user  발화 시작: 괜찮아 보이는데. 신규 환자를 받으시려나?
    16.49s  user  발화 끝
    18.78s  <ret> 발화 (turn6 첫 프레임)
    18.85s  agent 발화 시작: 네.
    18.85s  user  발화 끝
    19.32s  agent 발화 시작: <ret> 뭐, 밴스 박사님은 칠월 십칠일 오후 두시에 예약이 가능합니다. 산악 일광 절약 시간 기준이에요.
    19.32s  agent 발화 끝
    19.91s  ⚡SPAN 주입 [d'=1.14s / d_lead=6.60s]: (tool result) {"availability": "Next available appointment is July 17t
    25.92s  user  발화 시작: 칠월 십칠일은 좀 멀다. 더 빨리 예약 가능한 다른 곳은 없어?
    25.92s  agent 발화 끝
    31.09s  <ret> 발화 (turn9 첫 프레임)
    31.10s  agent 발화 시작: 정말요?
    31.10s  user  발화 끝
    31.39s  ⚡SPAN 주입 [d'=0.30s / d_lead=10.37s]: (tool result) {"provider name": "Dr. Marcus Bell", "address": "2200 We
    31.58s  agent 발화 시작: <ret> 음, 덴버에 마커스 벨 박사님도 찾았는데, 스트레스와 관계 문제를 전문으로 하시고, 전화번호는 삼
    31.58s  agent 발화 끝
    41.94s  user  발화 시작: 벨 박사님도 괜찮아 보이는데. 진료비는 얼마야?
    41.94s  agent 발화 끝
    44.62s  <ret> 발화 (turn11 첫 프레임)
    44.77s  agent 발화 시작: <ret> 싸이콜로지투데이닷컴에 따르면 벨 박사님은 오십분 세션당 백오십달러를 받으십니다.
    44.77s  user  발화 끝
    45.60s  ⚡SPAN 주입 [d'=0.97s / d_lead=3.77s]: (tool result) Dr. Marcus Bell, PhD, offers individual therapy sessions
    48.54s  user  발화 시작: 생각보다 좀 비싸네.
    48.54s  agent 발화 끝
    49.96s  agent 발화 시작: 예산에 맞는 좋은 상담사를 찾는 건 당연한 거고, 알아보고—
    49.96s  user  발화 끝
    54.20s  user  발화 시작: …세션당 백달러 정도 되는 곳으로 다시 찾아줄래?
    54.20s  agent 발화 끝
    57.30s  <ret> 발화 (turn15 첫 프레임)
    57.50s  agent 발화 시작: <ret> 덴버 카운슬링 서비스는 덴버카운슬링서비스스닷컴에 따르면 세션당 팔십오달러부터 시작합니다.
    57.50s  user  발화 끝
    58.15s  ⚡SPAN 주입 [d'=0.85s / d_lead=3.77s]: (tool result) Several therapists in Denver offer sessions around $100.
    61.27s  user  발화 시작: 훨씬 합리적인 것 같아. 전화번호 좀 알려줄래?
    61.27s  agent 발화 끝
    63.97s  <ret> 발화 (turn17 첫 프레임)
    64.50s  ⚡SPAN 주입 [d'=0.53s / d_lead=8.01s]: (tool result) The phone number for Denver Counseling Services is (303)
    64.57s  agent 발화 시작: <ret> 전화번호는 삼 공 삼 오 오 오 육 칠 팔 구입니다. [happy] 더 저렴한 옵션을 찾아서 기쁩
    64.57s  user  발화 끝
    72.58s  user  발화 시작: 어어.
    72.58s  agent 발화 끝
    73.05s  user  발화 시작: 좋아. 도와줘서 고마워.
    73.05s  user  발화 끝
    74.46s  agent 발화 시작: 천만에요.
    74.46s  user  발화 끝
    74.93s  agent 발화 끝
