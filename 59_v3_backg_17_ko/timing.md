# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "세은",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-13",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시, 식스 시즌은 언제 시작하나요? | S2 아, 그러셨군요. 그럼, 혹시 새로운 영화 볼만한 거 추천해  | S3 예고편 잠깐 보여주세요. | S4 이십삼도면 꽤 덥겠네요.

     0.00s  user  발화 시작: 혹시, 식스 시즌은 언제 시작하나요?
     2.19s  <ret> 발화 (turn1 첫 프레임)
     2.35s  agent 발화 시작: <ret> 새로운 시즌을 기다리시는군요. 식스라는 드라마는 이천십칠년 일월 십팔일에 시작해서 이천십팔년 이월
     2.35s  ⚡SPAN 주입 [d'=0.50s / d_lead=9.23s]: The television series Six premiered on January 18, 2017, and concluded
     2.54s  user  발화 끝
     8.45s  user  발화 시작: 네.
     8.80s  user  발화 끝
    11.48s  user  발화 시작: 이천십팔년에 끝났다고 하셨죠?
    11.58s  agent 발화 끝
    13.37s  user  발화 끝
    13.38s  <ret> 발화 (turn4 첫 프레임)
    13.62s  agent 발화 시작: <ret> 네, 맞습니다. 말씀드린 대로, 식스는 이천십팔년에 마지막 시즌을 마쳤습니다.
    13.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: The television series Six premiered on January 18, 2017, and concluded
    19.29s  user  발화 시작: 어머, 벌써 시간이 그렇게 됐네.
    19.32s  agent 발화 끝
    21.18s  user  발화 시작: 아, 그러셨군요. 그럼, 혹시 새로운 영화 볼만한 거 추천해 주실 수 있나요?
    21.36s  user  발화 끝
    26.21s  <ret> 발화 (turn7 첫 프레임)
    26.45s  agent 발화 시작: <ret> 영화를 찾고 있습니다. 크리스토퍼 놀란 감독의 '오펜하이머'가 이천이십삼년 칠월 이십일일에 개봉했
    26.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) Found: "Oppenheimer", directed by Christopher Nolan, rel
    26.50s  user  발화 끝
    34.24s  agent 발화 끝
    36.40s  user  발화 시작: 오펜하이머요? 그 영화에 대해 좀 더 자세히 알려주세요.
    39.20s  <ret> 발화 (turn9 첫 프레임)
    39.60s  agent 발화 시작: <ret> '오펜하이머'의 예고편을 재생해 드릴게요.
    39.60s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.86s]: (tool result) Playing trailer for "Oppenheimer".
    39.76s  user  발화 끝
    42.46s  agent 발화 끝
    43.17s  user  발화 시작: 예고편 잠깐 보여주세요.
    44.41s  agent 발화 시작: 예고편을 보여드리는 동안 잠시 눈을 감고 편안하게 호흡해 보세요. 영화 속 긴장감에 몸과 마음이 차분해질 거
    44.64s  user  발화 끝
    47.15s  user  발화 시작: 네.
    47.65s  user  발화 끝
    51.74s  agent 발화 끝
    52.14s  user  발화 시작: 아, 좋네요. 혹시 오늘 날씨는 어때요?
    54.96s  <ret> 발화 (turn14 첫 프레임)
    55.04s  agent 발화 시작: <ret> 지금 날씨는 기온이 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다.
    55.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) The weather is 23.0°C, humidity 74%, wind 5.5 km/h.
    55.05s  user  발화 끝
    61.71s  user  발화 시작: 이십삼도면 꽤 덥겠네요.
    62.21s  agent 발화 끝
    63.95s  agent 발화 시작: 네, 조금 더울 수 있겠네요. 시원한 물 한 잔 마시면서 잠시 휴식을 취하는 건 어떠세요?
    63.97s  user  발화 끝
    69.56s  agent 발화 끝
    69.91s  user  발화 시작: 좋은 생각이네요. 고마워요.
    71.79s  agent 발화 시작: 도움이 되었다니 기쁩니다. 마음의 평화를 찾으시는 데 조금이나마 도움이 되셨으면 좋겠습니다.
    71.93s  user  발화 끝
    78.17s  agent 발화 끝
