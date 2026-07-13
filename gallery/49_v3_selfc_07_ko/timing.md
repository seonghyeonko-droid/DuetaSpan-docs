# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "다람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울에서 괜찮은 레스토랑 좀 찾아줄래? | S2 응, 맞아. 분위기는 비슷하게 좋고, 가격은 조금만 저렴한 곳 | S3 … 발우공양은 채식만 파는 곳이야? | S4 응, 부탁해. 이번 주 토요일 저녁 일곱시에 두명으로 예약해 

     0.00s  user  발화 시작: 이번 주 토요일에 서울에서 괜찮은 레스토랑 좀 찾아줄래?
     3.27s  <ret> 발화 (turn1 첫 프레임)
     3.67s  agent 발화 시작: <ret> 서울에는 다양한 레스토랑이 있는데, 특히 종로구 대원전로 삼십에 위치한 '가온'은 훌륭한 한식 레
     3.67s  user  발화 끝
     4.55s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.42s]: There are many restaurants in Seoul, South Korea, with varying price t
    10.09s  user  발화 시작: 맞아.
    10.09s  agent 발화 끝
    10.55s  user  발화 시작: 음… 가온은 좀 비쌀 것 같은데, 조금 더 저렴한 곳도 있을까?
    10.55s  user  발화 끝
    15.59s  agent 발화 시작: 아, 가격이 부담스러우시군요. 가온 외에 다른 곳도 찾아볼까요?
    15.59s  user  발화 끝
    19.26s  user  발화 시작: 응.
    19.26s  agent 발화 끝
    19.72s  user  발화 시작: 응, 맞아. 분위기는 비슷하게 좋고, 가격은 조금만 저렴한 곳으로.
    19.72s  user  발화 끝
    23.84s  agent 발화 시작: 분위기는 좋으면서 가격이 조금 더 합리적인 곳을 찾아볼게요.
    23.84s  user  발화 끝
    27.51s  user  발화 시작: 응.
    27.51s  agent 발화 끝
    27.97s  user  발화 시작: 아, 그리고 혹시 그 레스토랑 근처에 주차장이 있는지 알려줄 수 있어?
    27.97s  user  발화 끝
    33.01s  agent 발화 시작: 예.
    33.01s  user  발화 끝
    33.35s  <ret> 발화 (turn11 첫 프레임)
    33.47s  agent 발화 시작: <ret> 서울 중구 퇴계로 오십칠에 위치한 '발우공양'이라는 한식당은 주차장이 있고, 가격도 적당한 편입니
    33.47s  agent 발화 끝
    33.65s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.96s]: (tool result) {"restaurants": [{"name": "Balwoo Gongyang", "address": 
    39.43s  user  발화 시작: … 발우공양은 채식만 파는 곳이야?
    39.43s  agent 발화 끝
    41.73s  agent 발화 시작: 네, 발우공양은 사찰 음식 전문점으로, 채식 위주의 메뉴를 제공합니다.
    41.73s  user  발화 끝
    45.85s  user  발화 시작: 응응.
    45.85s  agent 발화 끝
    46.31s  user  발화 시작: 아, 그럼 됐어. 고기 먹고 싶으니까 다른 곳 찾아줘.
    46.31s  user  발화 끝
    50.44s  agent 발화 시작: 예.
    50.44s  user  발화 끝
    50.83s  <ret> 발화 (turn17 첫 프레임)
    50.90s  agent 발화 시작: <ret> 서울 중구 명동이길 이십칠에 '한추'라는 삼겹살 전문점이 있습니다. 주차도 가능하고, 가격도 괜찮
    50.90s  agent 발화 끝
    51.51s  ⚡SPAN 주입 [d'=0.68s / d_lead=5.96s]: (tool result) {"restaurants": [{"name": "Han Chu", "address": "27, Mye
    56.86s  user  발화 시작: 응.
    56.86s  agent 발화 끝
    57.32s  agent 발화 시작: [happy] 삼겹살 좋아하시는군요. 그럼 '한추'로 예약해 드릴까요?
    57.32s  user  발화 끝
    60.53s  user  발화 시작: 응.
    60.53s  agent 발화 끝
    60.98s  user  발화 시작: 응, 부탁해. 이번 주 토요일 저녁 일곱시에 두명으로 예약해 줘.
    60.98s  user  발화 끝
    65.57s  agent 발화 시작: 네.
    65.57s  user  발화 끝
    66.00s  <ret> 발화 (turn23 첫 프레임)
    66.03s  agent 발화 시작: <ret> 네, '한추'에 이번 주 토요일 저녁 일곱시에 두명으로 예약이 완료되었습니다. 확인 번호는 에이치
    66.03s  agent 발화 끝
    66.46s  ⚡SPAN 주입 [d'=0.46s / d_lead=9.63s]: (tool result) {"confirmation id": "HC7111902"}
    75.66s  agent 발화 끝
