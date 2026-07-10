# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "태형",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-28",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-20",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 요즘 날씨가 너무 변덕스러워요. 혹시 오늘 서울 날씨는 어때요 | S2 아, 그렇군요. 근데 궁금한 게 있는데요. 체감온도 공식이 바 | S3 오, 이천일년이군요. 생각보다 오래됐네요. | S4 뭐, 아직은 적응 중이에요.

     0.00s  user  발화 시작: 요즘 날씨가 너무 변덕스러워요. 혹시 오늘 서울 날씨는 어때요?
     5.26s  <ret> 발화 (turn1 첫 프레임)
     5.33s  agent 발화 시작: <ret> 서울은 현재 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요.
     5.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     5.46s  user  발화 끝
    11.18s  agent 발화 끝
    11.19s  user  발화 시작: 아, 그렇군요. 근데 궁금한 게 있는데요. 체감온도 공식이 바뀐 게 언제였죠?
    17.43s  <ret> 발화 (turn3 첫 프레임)
    17.58s  agent 발화 시작: <ret> 체감온도 공식은 이천일년 십일월에 미국 기상청과 캐나다 기상센터에 의해 업데이트되었답니다.
    17.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: The formula for wind chill was updated in November 2001 by the Nationa
    17.67s  user  발화 끝
    20.32s  user  발화 시작: 헐.
    20.86s  user  발화 끝
    23.39s  agent 발화 시작: 새로운 공식은 이전보다 더 정확하다고 알려져 있어요.
    23.50s  agent 발화 끝
    25.33s  user  발화 시작: 응.
    25.97s  user  발화 끝
    26.53s  agent 발화 끝
    26.54s  user  발화 시작: 오, 이천일년이군요. 생각보다 오래됐네요.
    30.09s  agent 발화 시작: 시간은 참 빠르게 흘러가죠. 혹시 새로운 도시에 정착하면서 힘든 점은 없으세요?
    30.23s  user  발화 끝
    35.09s  agent 발화 끝
    35.15s  user  발화 시작: 뭐, 아직은 적응 중이에요.
    37.69s  user  발화 끝
    37.72s  agent 발화 시작: 새로운 환경에 적응하는 건 시간이 필요한 일이에요. 천천히 주변을 둘러보면서 자신만의 공간을 만들어가세요.
    44.58s  agent 발화 끝
