# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "재정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "anniversary",
#       "text": "User's anniversary is September 20."
#     },
#     {
#       "date": "2026-06-06",
#       "category": "sibling",
#       "text": "User has a younger sibling named Minjun."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in October."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 26°C."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "employer",
#       "text": "User works at a design agency."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-06-19",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-05-30",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2025-12-12",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 영국 사람들은 크래커를 뭐라고 불러?
     1.66s  <ret> 발화 (turn1 첫 프레임)
     2.27s  agent 발화 시작: <ret> 영국에서는 크래커를 보통 비스킷이라고 부릅니다. [happy] 뭐, 문화 차이 정도로 생각하시면 
     2.27s  user  발화 끝
     2.58s  ⚡SPAN 주입 [d'=0.92s / d_lead=6.36s]: In British English, a cracker is commonly known as a biscuit.
     8.63s  agent 발화 끝
