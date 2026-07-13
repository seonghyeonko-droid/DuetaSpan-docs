# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "채찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때요? | S2 속초요? 거기는 한 번도 가본 적이 없네요. | S3 트리플 세븐이었군요. 그 비행기는 안전한 편인가요? | S4 이십오만 원이면 조금 비싼 편이네요.

     0.00s  user  발화 시작: 오늘 날씨 어때요?
     1.34s  <ret> 발화 (turn1 첫 프레임)
     1.50s  agent 발화 시작: <ret> 서울은 현재 이십팔도이고, 습도는 육십오퍼센트, 바람은 초속 사 점 일미터로 구름이 조금 껴 있어
     1.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.01s]: (tool result) {"location": "Seoul", "temperature": "28.0°C", "humidity
     1.50s  user  발화 끝
     8.51s  user  발화 시작: 네.
     8.51s  agent 발화 끝
     9.01s  user  발화 시작: 아, 그렇군요. 이번 주말에 여행 갈 만한 곳 추천해 줄 수 있어요?
     9.01s  user  발화 끝
    15.02s  agent 발화 시작: 어떤 종류의 여행을 좋아하시나요? 조용하고 편안한 곳을 원하시는지, 아니면 활동적인 곳을 원하시는지 알려주시
    15.02s  user  발화 끝
    25.53s  user  발화 시작: 그렇죠.
    25.53s  agent 발화 끝
    26.03s  user  발화 시작: 음… 바다가 보이는 조용한 곳이면 좋겠어요.
    26.03s  user  발화 끝
    29.04s  agent 발화 시작: 바다가 보이는 조용한 곳이라… 그럼 강원도 속초는 어떠세요? 아름다운 해변과 맛있는 해산물로 유명한 곳이에요
    29.04s  user  발화 끝
    36.05s  user  발화 시작: 속초요? 거기는 한 번도 가본 적이 없네요.
    36.05s  agent 발화 끝
    39.55s  agent 발화 시작: 속초는 동해안에 위치한 아름다운 도시예요. 설악산 국립공원과도 가까워서 자연을 즐기기에도 좋고요.
    39.55s  user  발화 끝
    45.06s  user  발화 시작: 아.
    45.06s  agent 발화 끝
    45.56s  agent 발화 시작: 특히 여름에는 해수욕을 즐기려는 사람들로 붐비지만, 지금은 비교적 한적하게 바다를 감상할 수 있을 거예요. 
    45.56s  user  발화 끝
    55.57s  user  발화 시작: 네.
    55.57s  agent 발화 끝
    56.07s  user  발화 시작: 혹시 말레이시아 항공 삼백칠십편에 사용된 비행기 모델의 별명이 뭐였죠?
    56.07s  user  발화 끝
    60.42s  <ret> 발화 (turn14 첫 프레임)
    60.58s  agent 발화 시작: <ret> 말레이시아 항공 삼백칠십편에 사용된 비행기 모델은 보잉 칠 칠 칠 이 공 공 이 알이었는데, 흔히
    60.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.51s]: The Boeing 777-200ER, often nicknamed "Triple Seven", was the aircraft
    60.58s  user  발화 끝
    70.09s  user  발화 시작: 트리플 세븐이었군요. 그 비행기는 안전한 편인가요?
    70.09s  agent 발화 끝
    73.09s  agent 발화 시작: 보잉 칠백칠십칠은 전반적으로 안전성이 매우 높은 비행기로 평가받고 있어요. 지금까지 사고율이 낮은 편이에요.
    73.09s  user  발화 끝
    79.60s  user  발화 시작: 네.
    79.60s  agent 발화 끝
    80.10s  user  발화 시작: 음… 알겠습니다. 혹시 속초에 괜찮은 호텔 있나요?
    80.10s  user  발화 끝
    83.21s  <ret> 발화 (turn19 첫 프레임)
    83.61s  agent 발화 시작: <ret> 속초에는 롯데리조트 속초가 괜찮은 평가를 받고 있어요. 강원도 속초시 대포항로 백육십팔에 위치하고
    83.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.51s]: (tool result) {"hotel name": "롯데리조트 속초", "address": "강원 속초시 대포항로 168",
    83.61s  user  발화 끝
    94.12s  user  발화 시작: 진짜요?
    94.12s  agent 발화 끝
    94.62s  user  발화 시작: 이십오만 원이면 조금 비싼 편이네요.
    94.62s  user  발화 끝
    97.12s  agent 발화 시작: 조금 비싼 편이긴 하네요. 좀 더 저렴한 곳을 찾아볼까요? 아니면 다른 옵션을 알아볼까요?
    97.12s  user  발화 끝
   103.63s  user  발화 시작: 음… 다른 옵션도 한번 알아봐 주세요.
   103.63s  agent 발화 끝
   106.64s  agent 발화 시작: 네, 알겠습니다. 조금 더 저렴한 호텔을 찾아보겠습니다. 잠시만 기다려 주세요.
   106.64s  user  발화 끝
   111.64s  agent 발화 끝
