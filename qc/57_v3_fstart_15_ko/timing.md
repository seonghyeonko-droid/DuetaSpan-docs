# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "하연",
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
#       "date": "2026-02-24",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "pet",
#       "text": "User has a Labrador named Cooper."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-17",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 저녁에 뭐 먹을까? 맛있는 거 먹고 싶어. | S2 서면이 어디야? | S3 아, 그렇구나. 그럼 서면에서 가장 인기 있는 닭갈비집은 어디 | S4 예약해 줘. 이번 주 토요일 저녁 일곱시에.

     0.00s  user  발화 시작: 오늘 저녁에 뭐 먹을까? 맛있는 거 먹고 싶어.
     3.83s  agent 발화 시작: 네.
     3.83s  user  발화 끝
     4.30s  agent 발화 시작: 어떤 종류의 음식이 좋으세요? 혹시 특별히 생각나는 게 있으신가요?
     4.30s  agent 발화 끝
     8.61s  user  발화 시작: 글쎄… 매운 게 당기는 것 같아.
     8.61s  agent 발화 끝
    11.23s  <ret> 발화 (turn4 첫 프레임)
    11.48s  agent 발화 시작: <ret> 매운 음식이요? 그럼 닭갈비는 어떠세요? 제가 근처 맛집을 찾아볼까요?
    11.48s  user  발화 끝
    11.71s  ⚡SPAN 주입 [d'=0.48s / d_lead=4.30s]: (tool result) There are many Korean restaurants in Busan that serve sp
    15.78s  agent 발화 시작: 부산 서면에 매콤한 닭갈비 맛집이 많이 있어요.
    15.78s  agent 발화 끝
    19.13s  user  발화 시작: 서면이 어디야?
    19.13s  agent 발화 끝
    20.08s  agent 발화 시작: 서면은 부산의 중심 상업 지구예요. 교통이 편리하고 맛집이 많기로 유명하죠.
    20.08s  user  발화 끝
    24.86s  user  발화 시작: 아, 그렇구나. 그럼 서면에서 가장 인기 있는 닭갈비집은 어디야?
    24.86s  agent 발화 끝
    29.17s  agent 발화 시작: 그렇죠.
    29.17s  user  발화 끝
    29.65s  agent 발화 시작: 잠시만요, 서면에서 가장 인기 있는 닭갈비집을 찾아보고 있습니다—
    29.65s  agent 발화 끝
    33.47s  user  발화 시작: … 혹시 혼자 먹기에도 괜찮은 곳이야?
    33.47s  agent 발화 끝
    36.03s  <ret> 발화 (turn12 첫 프레임)
    36.34s  agent 발화 시작: <ret> “서면 닭갈비 맛집”은 평점이 사 점 오점이고 혼자 먹기에도 좋다고 합니다. 주소는 부산시 부산진
    36.34s  user  발화 끝
    36.62s  ⚡SPAN 주입 [d'=0.59s / d_lead=8.61s]: Seomyeon Dakgalbi Matjib has a rating of 4.5 stars and is known for be
    44.95s  user  발화 시작: 그치.
    44.95s  agent 발화 끝
    45.43s  agent 발화 시작: 혹시 다른 메뉴도 보고 싶으신가요? 아니면 바로 예약해 드릴까요?
    45.43s  user  발화 끝
    49.73s  user  발화 시작: 예약해 줘. 이번 주 토요일 저녁 일곱시에.
    49.73s  agent 발화 끝
    52.96s  <ret> 발화 (turn16 첫 프레임)
    53.08s  agent 발화 시작: <ret> 네, 이번 주 토요일 저녁 일곱시에 한명으로 예약이 완료되었습니다. 확인 번호는 팔 칠 지 사 에
    53.08s  user  발화 끝
    54.04s  ⚡SPAN 주입 [d'=1.07s / d_lead=8.13s]: (tool result) Reservation confirmed for 1 person at Seomyeon Dakgalbi 
    61.20s  agent 발화 시작: 즐거운 저녁 식사 되세요!
    61.20s  agent 발화 끝
    63.12s  agent 발화 끝
