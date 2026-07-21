# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "수정",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "pet",
#       "text": "User has a Ragdoll cat named Miso."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "partner",
#       "text": "User's partner is named Minjun."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "plant",
#       "text": "User is growing a lemon tree at home."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "learning",
#       "text": "User is studying for a driving test."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-02-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 타라 씨. 스케넥터디를 지나는 고속도로가 궁금해요.
     4.59s  <ret> 발화 (turn1 첫 프레임)
     4.86s  user  발화 끝
     4.90s  agent 발화 시작: <ret> 스케넥터디를 지나가는 고속도로는 백사십육번 국도, 팔백구십번 주간 고속도로, 그리고 오십번 뉴욕 
     5.65s  ⚡SPAN 주입 [d'=1.06s / d_lead=9.59s]: Route 146, Interstate 890, and New York State Route 50 all run through
     8.99s  user  발화 시작: 그렇죠.
     9.90s  user  발화 끝
    14.49s  agent 발화 끝
    14.64s  agent 발화 시작: 혹시 특정 목적지를 향해 가시는 길인가요?
    16.87s  user  발화 시작: 네네.
    17.64s  agent 발화 끝
    17.64s  user  발화 끝
    18.85s  user  발화 시작: 아니요, 그냥 궁금해서요. 팔백구십번 고속도로는 어디까지 이어져 있나요?
    25.27s  <ret> 발화 (turn6 첫 프레임)
    25.33s  user  발화 끝
    25.60s  agent 발화 시작: <ret> 팔백구십번 고속도로는 스케넥터디에서 앨버니까지 이어져 있으며, 대략 사십킬로미터 정도 됩니다.
    26.55s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.18s]: (tool result) Interstate 890 runs from Schenectady to Albany, New York
    32.78s  agent 발화 끝
    33.39s  user  발화 시작: … 혹시 구십번 고속도로도 스케넥터디 근처로 지나가나요?
    37.56s  <ret> 발화 (turn8 첫 프레임)
    37.83s  agent 발화 시작: <ret> 아, 네, 물론이죠. 구십번 고속도로도 스케넥터디 근처를 지나갑니다.
    37.83s  user  발화 끝
    38.38s  ⚡SPAN 주입 [d'=0.82s / d_lead=5.41s]: Interstate 90 also passes near Schenectady, New York, providing access
    43.22s  agent 발화 시작: 구십번 고속도로는 보스턴과 시카고로 가는 길목이기도 합니다.
    43.24s  agent 발화 끝
    47.43s  agent 발화 끝
    47.52s  agent 발화 시작: 혹시 여행 계획 세우시는 중이신가요?
    50.20s  agent 발화 끝
