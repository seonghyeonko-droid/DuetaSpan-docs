# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "현슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 상어네이도 육 언제 나오는지 아세요? | S2 아, 죄송해요. 다시 영화 얘기로 돌아갈게요. | S3 아니요, 서울에 살아요. 그냥 부산 여행을 생각 중이라서요. | S4 와, 낙곱새 맛있겠네요. 혹시 그 근처에 카페도 있나요?

     0.00s  user  발화 시작: 혹시 상어네이도 육 언제 나오는지 아세요?
     2.47s  <ret> 발화 (turn1 첫 프레임)
     2.77s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.80s]: Sharknado 6 was released on August 19, 2018.
     2.91s  agent 발화 시작: <ret> 상어네이도 육은 이천십팔년 팔월 십구일에 개봉했습니다. [happy] 정말 독특한 영화죠, 혹시 
     2.91s  user  발화 끝
     9.71s  user  발화 시작: 맞아요.
     9.71s  agent 발화 끝
    10.20s  user  발화 시작: 아니요, 괜찮아요. 그냥 궁금해서요. 아, 잠깐만요.
    10.20s  user  발화 끝
    13.11s  user  발화 시작: 여보, 오늘 저녁 뭐 먹을까?
    13.11s  user  발화 끝
    15.54s  user  발화 시작: 아, 죄송해요. 다시 영화 얘기로 돌아갈게요.
    15.54s  user  발화 끝
    18.45s  agent 발화 시작: 괜찮습니다. 언제든 말씀하세요. 혹시 다른 상어 영화에 관심 있으신가요?
    18.45s  user  발화 끝
    22.82s  user  발화 시작: 음… 다른 상어 영화는 잘 모르겠어요. 그런데 혹시 지금 부산 날씨는 어때요?
    22.82s  agent 발화 끝
    28.46s  <ret> 발화 (turn8 첫 프레임)
    28.65s  agent 발화 시작: <ret> 현재 부산 날씨는 이십팔 점 삼도, 습도는 육십팔퍼센트, 풍속은 시속 사 점 일킬로미터로 맑습니다
    28.65s  user  발화 끝
    29.73s  ⚡SPAN 주입 [d'=1.26s / d_lead=8.74s]: (tool result) 부산: 28.3°C, 습도 68%, 풍속 4.1 km/h, 맑음.
    37.39s  user  발화 시작: 그렇죠.
    37.39s  agent 발화 끝
    37.87s  user  발화 시작: 아니요, 서울에 살아요. 그냥 부산 여행을 생각 중이라서요.
    37.87s  user  발화 끝
    41.76s  agent 발화 시작: 아, 서울에 계시는군요. 부산 여행 계획하시는군요. 혹시 부산에서 추천하는 맛집을 알아드릴까요?
    41.76s  user  발화 끝
    47.10s  user  발화 시작: 오, 좋아요! 부산에서 해운대 근처에 맛있는 곳 있으면 알려주세요.
    47.10s  agent 발화 끝
    51.47s  agent 발화 시작: 그렇죠.
    51.47s  user  발화 끝
    51.92s  <ret> 발화 (turn14 첫 프레임)
    51.96s  agent 발화 시작: <ret> 해운대 근처에는 금수복국, 밀면왕, 개미집이 유명합니다. 금수복국은 돼지국밥이 일만 원, 밀면왕은
    51.96s  agent 발화 끝
    53.00s  ⚡SPAN 주입 [d'=1.07s / d_lead=12.14s]: (tool result) 해운대: 금수복국 (돼지국밥, ₩10,000), 밀면왕 (밀면, ₩8,000), 개미집 (낙곱새, ₩
    64.09s  user  발화 시작: 와, 낙곱새 맛있겠네요. 혹시 그 근처에 카페도 있나요?
    64.09s  agent 발화 끝
    67.85s  <ret> 발화 (turn16 첫 프레임)
    67.98s  agent 발화 시작: <ret> 개미집 근처에는 카페 루프탑과 해운대 브런치가 있습니다. 카페 루프탑의 커피는 오천 원, 해운대 
    67.98s  user  발화 끝
    68.47s  ⚡SPAN 주입 [d'=0.62s / d_lead=12.14s]: (tool result) 개미집 근처: 카페 루프탑 (커피, ₩5,000), 해운대 브런치 (브런치, ₩15,000).
    80.12s  user  발화 시작: 정말 감사합니다, 프리오르 씨. 덕분에 여행 계획이 점점 더 구체화되는 것 같아요.
    80.12s  agent 발화 끝
    85.94s  agent 발화 시작: 예.
    85.94s  user  발화 끝
    86.43s  agent 발화 시작: 천만에요. 언제든 도움이 필요하시면 말씀해주세요. 여행 준비 잘 하시고, 즐거운 시간 보내시길 바랍니다.
    86.43s  agent 발화 끝
    92.74s  agent 발화 끝
