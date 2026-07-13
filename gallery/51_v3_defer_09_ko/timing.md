# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "소빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-10-17",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 구글 주식 가격이 지금 얼마예요? | S2 주말에 비가 온다고요? 아, 좀 아쉽네요. | S3 돼지국밥… 맛있겠네요. | S4 아, 맞아요!

     0.00s  user  발화 시작: 구글 주식 가격이 지금 얼마예요?
     2.40s  <ret> 발화 (turn1 첫 프레임)
     2.56s  agent 발화 시작: <ret> 구글 주식은 오늘 칠월 십일 기준으로 백칠십이 점 삼 오달러에 마감했고, 어제 종가인 백칠십 점 
     2.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.76s]: (tool result) Google's stock closed today, July 10, 2026, at 172.35 US
     2.56s  user  발화 끝
    13.32s  user  발화 시작: 아.
    13.32s  agent 발화 끝
    13.83s  user  발화 시작: 음, 네.
    13.83s  user  발화 끝
    14.86s  agent 발화 시작: 혹시 다른 주식에 대해서도 알아봐 드릴까요? 저는 크리오라라고 해요.
    14.86s  user  발화 끝
    19.47s  user  발화 시작: 음.
    19.47s  agent 발화 끝
    19.98s  user  발화 시작: 아, 아니요. 오늘은 괜찮아요. 이번 주말에 친구랑 여행 가기로 했는데, 혹시 부산 날씨 어때요?
    19.98s  user  발화 끝
    27.15s  agent 발화 시작: 아.
    27.15s  user  발화 끝
    27.58s  <ret> 발화 (turn8 첫 프레임)
    27.66s  agent 발화 시작: <ret> 부산 날씨는 현재 이십팔 점 오도로 습도는 육십팔퍼센트, 바람은 시속 사 점 이킬로미터고요, 이번
    27.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.25s]: (tool result) The current weather in Busan is 28.5°C, with humidity at
    27.66s  agent 발화 끝
    37.91s  user  발화 시작: 아.
    37.91s  agent 발화 끝
    38.42s  user  발화 시작: 주말에 비가 온다고요? 아, 좀 아쉽네요.
    38.42s  user  발화 끝
    41.50s  agent 발화 시작: 여행 계획에 조금이라도 영향을 줄까 걱정되네요. 혹시 다른 도시도 고려하고 계신가요?
    41.50s  user  발화 끝
    47.13s  user  발화 시작: 아니요, 부산으로 정했어요. 그럼, 부산에서 유명한 맛집 좀 추천해 줄 수 있어요?
    47.13s  agent 발화 끝
    53.20s  <ret> 발화 (turn13 첫 프레임)
    53.28s  agent 발화 시작: <ret> 부산은 돼지국밥으로 유명하고, 송정 돼지국밥이나 밀면 맛집들이 평점이 높습니다.
    53.28s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.61s]: (tool result) Busan is famous for dwaeji gukbap (pork and rice soup), 
    53.28s  user  발화 끝
    57.89s  user  발화 시작: 응.
    57.89s  agent 발화 끝
    58.40s  user  발화 시작: 돼지국밥… 맛있겠네요.
    58.40s  user  발화 끝
    59.43s  agent 발화 시작: 돼지국밥은 부산을 대표하는 음식이죠. 혹시 다른 종류의 음식을 선호하시나요?
    59.43s  user  발화 끝
    64.04s  user  발화 시작: 응.
    64.04s  agent 발화 끝
    64.55s  user  발화 시작: 잠깐만요, 제가… 아, 어제 친구가 저한테…
    64.55s  user  발화 끝
    67.38s  <ret> 발화 (turn19 첫 프레임)
    67.62s  agent 발화 시작: <ret> 혹시 친구분께 부산 여행 계획을 말씀드린 적이 있으신가요? 이천이십사년 삼월 십오일에 친구분이 부
    67.62s  user  발화 끝
    68.74s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.10s]: [2024-03-15] 친구가 부산 여행을 가고 싶어 한다.
    76.85s  user  발화 시작: 아, 맞아요!
    76.85s  agent 발화 끝
    77.87s  agent 발화 시작: 친구분과 함께 즐거운 시간 보내시길 바랍니다.
    77.87s  user  발화 끝
    80.94s  user  발화 시작: 고마워요, 크리오라.
    80.94s  agent 발화 끝
    81.97s  agent 발화 시작: 천만에요. 언제든지 편하게 이야기 나눠주세요. 저는 당신의 행복을 응원합니다.
    81.97s  user  발화 끝
    86.58s  agent 발화 끝
