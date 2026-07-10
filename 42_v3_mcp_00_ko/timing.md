# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "보형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 파리 에펠탑의 좌표를 알려줄 수 있을까요? | S2 리츠 파리가 좋겠네요. 예약해 줄 수 있나요? | S3 르 부용 샤르티에가 가깝네요. | S4 …그중에 루브르 박물관은 예약해야 하나요?

     0.00s  user  발화 시작: 파리 에펠탑의 좌표를 알려줄 수 있을까요?
     2.90s  <ret> 발화 (turn1 첫 프레임)
     3.14s  agent 발화 시작: <ret> 에펠탑의 좌표는 북위 사십팔 점 팔 오 팔 사도, 동경 이 점 이 구 사 오도입니다. 파리에 가실
     3.19s  user  발화 끝
     4.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) 48.8584° N, 2.2945° E
    11.57s  agent 발화 끝
    12.20s  user  발화 시작: 네, 다음 달에 파리 여행을 가려고 해요.
    15.90s  user  발화 끝
    16.06s  agent 발화 시작: 다음 달 파리 여행을 계획하고 계시는군요. 멋진 여행이 될 거예요. 혹시 숙소는 예약하셨나요?
    20.11s  user  발화 시작: 아.
    20.74s  user  발화 끝
    21.99s  agent 발화 끝
    22.64s  user  발화 시작: 아직 숙소를 예약하지 못했어요. 추천해 줄 만한 곳이 있을까요?
    27.02s  <ret> 발화 (turn6 첫 프레임)
    27.07s  user  발화 끝
    27.10s  agent 발화 시작: <ret> 파리에는 럭셔리 호텔이 많아요. 리츠 파리, 브리스톨 파리, 포시즌 호텔 조르주 V가 괜찮은 선택
    29.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.12s]: (tool result) Hotel Ritz Paris, 15 Place Vendôme, 75001 Paris; Le Bris
    35.21s  agent 발화 끝
    35.73s  user  발화 시작: 리츠 파리가 좋겠네요. 예약해 줄 수 있나요?
    39.10s  user  발화 끝
    39.20s  <ret> 발화 (turn8 첫 프레임)
    39.28s  agent 발화 시작: <ret> 리츠 파리 호텔이 예약되었습니다. 확인 번호는 RTZ78923입니다. 팔월 십오일부터 이십일까지 
    41.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.99s]: (tool result) Confirmation ID: RTZ78923, Hotel Ritz Paris, 15 Place Ve
    48.28s  agent 발화 끝
    48.66s  user  발화 시작: 감사합니다. 혹시 그 근처에 괜찮은 레스토랑도 알아봐 줄 수 있을까요?
    52.92s  <ret> 발화 (turn10 첫 프레임)
    53.16s  agent 발화 시작: <ret> 리츠 파리 근처에는 르 부용 샤르티에, 라르페주, 세프팀 레스토랑이 있습니다. 르 부용 샤르티에는
    53.25s  user  발화 끝
    53.42s  ⚡SPAN 주입 [d'=0.50s / d_lead=12.57s]: (tool result) Le Bouillon Chartier, 7 Rue du Faubourg Montmartre, 7500
    60.24s  user  발화 시작: 네.
    60.69s  user  발화 끝
    65.73s  agent 발화 끝
    66.07s  user  발화 시작: 르 부용 샤르티에가 가깝네요.
    68.51s  user  발화 끝
    68.70s  agent 발화 시작: 르 부용 샤르티에가 가장 가깝네요. 가성비 좋은 맛집으로 유명합니다.
    70.42s  user  발화 시작: 네.
    71.01s  user  발화 끝
    73.13s  agent 발화 시작: 파리에서 맛있는 식사를 즐기실 수 있을 거예요. 혹시 파리에서 꼭 가봐야 할 관광지도 궁금하신가요?
    73.15s  agent 발화 끝
    79.87s  user  발화 시작: 네, 물론이죠.
    79.90s  agent 발화 끝
    80.68s  <ret> 발화 (turn17 첫 프레임)
    80.92s  agent 발화 시작: <ret> 파리에서는 에펠탑, 루브르 박물관, 개선문, 노트르담 대성당, 오르세 미술관을 꼭 방문해 보세요.
    81.01s  user  발화 끝
    82.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) Eiffel Tower, Louvre Museum, Arc de Triomphe, Notre-Dame
    87.22s  user  발화 시작: …그중에 루브르 박물관은 예약해야 하나요?
    87.78s  agent 발화 끝
    90.13s  <ret> 발화 (turn19 첫 프레임)
    90.37s  agent 발화 시작: <ret> 루브르 박물관은 시간대별 예약을 권장합니다. 현재 오전 열시, 열한시, 오후 한시, 두시에 예약 
    90.60s  user  발화 끝
    92.05s  ⚡SPAN 주입 [d'=1.92s / d_lead=8.25s]: (tool result) Louvre Museum, 99 Rue de Rivoli, 75001 Paris: Time slots
    98.61s  agent 발화 끝
    98.84s  user  발화 시작: 오후 한시로 예약해 줄 수 있을까요?
   100.76s  <ret> 발화 (turn21 첫 프레임)
   101.16s  agent 발화 시작: <ret> 루브르 박물관 오후 한시 입장권이 예약되었습니다. 확인 번호는 LVR45678입니다. 팔월 십육일
   101.39s  user  발화 끝
   101.88s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.79s]: (tool result) Confirmation ID: LVR45678, Louvre Museum, 99 Rue de Rivo
   108.95s  agent 발화 끝
