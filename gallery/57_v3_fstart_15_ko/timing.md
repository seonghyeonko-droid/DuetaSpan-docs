# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "태은",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울 근처에서 캠핑할 만한 곳 좀 찾아줄 수 | S2 오, 다행이다. 그럼 바로 예약해 줘. | S3 …혹시 자라섬에서 자전거 빌릴… | S4 캠핑 가서 뭐 할지 아직 잘 모르겠는데, 자라섬에서 즐길 수 

     0.00s  user  발화 시작: 이번 주 토요일에 서울 근처에서 캠핑할 만한 곳 좀 찾아줄 수 있어?
     5.63s  <ret> 발화 (turn1 첫 프레임)
     5.71s  agent 발화 시작: <ret> 서울 근처에는 가평과 포천에 캠핑장이 많이 있어요. 괜찮은 곳을 찾아드릴게요.
     5.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.76s]: 서울 근처에는 여러 캠핑장이 있으며, 특히 가평과 포천 지역에 많은 캠핑장이 있습니다.
     5.71s  user  발화 끝
    10.47s  user  발화 시작: 가평 쪽으로 좀 더 자세히 알아봐 줘. 조용하고 자연이 좋은 곳이면 좋겠어.
    10.47s  agent 발화 끝
    15.77s  <ret> 발화 (turn3 첫 프레임)
    16.17s  agent 발화 시작: <ret> 가평 자라섬 캠핑장은 넓은 잔디밭과 깨끗한 시설을 갖추고, 북한강변에 있어서 자연 경관이 아주 아
    16.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.66s]: 가평 자라섬 캠핑장은 넓은 잔디밭과 깨끗한 시설을 갖추고 있으며, 북한강변에 위치하여 아름다운 자연 경관을 자랑합니다.
    16.17s  user  발화 끝
    22.84s  user  발화 시작: 자라섬 캠핑장 예약은 어떻게 해야 해? 지금 바로 예약 가능할까?
    22.84s  agent 발화 끝
    27.19s  <ret> 발화 (turn5 첫 프레임)
    27.59s  agent 발화 시작: <ret> 자라섬 캠핑장은 예약 가능하고, 현재 오만 원에 예약할 수 있어요. 확인 번호는 제트 엑스 팔 구
    27.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.56s]: (tool result) {"hotel name": "자라섬 캠핑장", "availability": "available", "
    27.59s  user  발화 끝
    36.16s  user  발화 시작: 오, 다행이다. 그럼 바로 예약해 줘.
    36.16s  agent 발화 끝
    38.85s  <ret> 발화 (turn7 첫 프레임)
    39.01s  agent 발화 시작: <ret> 네, 자라섬 캠핑장 예약이 완료되었습니다. 확인 번호는 제트 엑스 팔 구 에이 비입니다. 즐거운 
    39.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.61s]: (tool result) {"status": "confirmed", "confirmation id": "ZX89AB"}
    39.01s  user  발화 끝
    46.62s  user  발화 시작: 고마워. 혹시 자라섬 주변에 맛집도 추천해 줄 수 있어?
    46.62s  agent 발화 끝
    50.50s  <ret> 발화 (turn9 첫 프레임)
    50.90s  agent 발화 시작: <ret> 자라섬 주변에는 칼국수와 닭갈비 맛집이 많아요. 특히 ‘자라섬 칼국수’가 현지인들에게 인기가 많답
    50.90s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.71s]: 자라섬 주변에는 칼국수와 닭갈비로 유명한 맛집들이 많이 있습니다. 특히 '자라섬 칼국수'는 현지인들에게 인기가 많습니다.
    50.90s  user  발화 끝
    56.61s  user  발화 시작: 칼국수 맛집은 영업시간이 어떻게 돼? —
    56.61s  agent 발화 끝
    59.47s  user  발화 시작: …혹시 자라섬에서 자전거 빌릴…
    59.47s  user  발화 끝
    61.37s  user  발화 시작: …수 있는 곳도 있을까?
    61.37s  user  발화 끝
    62.95s  <ret> 발화 (turn13 첫 프레임)
    63.27s  agent 발화 시작: <ret> 자라섬 안에 자전거 대여소가 있어서 하루 종일 이용할 수 있고, 시간당 오천 원이에요.
    63.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.18s]: 자라섬 자전거 대여소는 하루 종일 운영되며, 시간당 5천 원에 자전거를 대여할 수 있습니다.
    63.27s  user  발화 끝
    69.46s  user  발화 시작: 정말요?
    69.46s  agent 발화 끝
    69.93s  user  발화 시작: 아, 좋네. 자전거 대여소 위치 좀 알려줄래?
    69.93s  user  발화 끝
    72.94s  <ret> 발화 (turn16 첫 프레임)
    73.26s  agent 발화 시작: <ret> 자라섬 자전거 대여소는 중앙광장 근처에 있고, 캠핑장에서도 쉽게 찾을 수 있어요.
    73.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: 자라섬 자전거 대여소는 자라섬 중앙광장 근처에 위치하고 있으며, 자라섬 캠핑장에서도 쉽게 찾을 수 있습니다.
    73.26s  user  발화 끝
    78.50s  user  발화 시작: 캠핑 가서 뭐 할지 아직 잘 모르겠는데, 자라섬에서 즐길 수 있는 활동들이 있을까?
    78.50s  agent 발화 끝
    84.28s  <ret> 발화 (turn18 첫 프레임)
    84.68s  agent 발화 시작: <ret> 캠핑 말고도 수상 레저, 자전거 타기, 산책, 음악 축제 등 다양한 활동을 즐길 수 있답니다.
    84.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: 자라섬에서는 캠핑 외에도 수상 레저, 자전거 타기, 산책, 음악 축제 등 다양한 활동을 즐길 수 있습니다.
    84.68s  user  발화 끝
    91.82s  user  발화 시작: 알았어. 덕분에 여행 계획 세우는 데 큰 도움이 됐어. 정말 고마워!
    91.82s  agent 발화 끝
    97.05s  agent 발화 시작: 천만에요. 즐거운 여행 되시길 바랍니다. 혹시 더 필요한 건 없으세요?
    97.05s  user  발화 끝
   101.81s  agent 발화 끝
