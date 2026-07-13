# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Taylor",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "home",
#       "text": "User's home address is 575 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕 바리엔, 오늘 기분 어때? | S2 그럼 남북 전쟁이랑 관련이 있는 거야? 애국심에 대한 반응 같 | S3 그러니까 실제로 대법원까지 소송이 갔었어? | S4 맞아. 날씨는…

     0.00s  user  발화 시작: 안녕 바리엔, 오늘 기분 어때?
     3.00s  agent 발화 시작: 정말 잘 지내요, 물어봐 주셔서 감사합니다. 마음 챙김을 조금 연습하기에 아주 좋은 날씨인데, 그렇게 생각하
     3.00s  user  발화 끝
    12.62s  user  발화 시작: 나중에 하려나. 궁금한 게 있는데… “In God We Trust”가 미국 돈에 처음 언제 등장했어?
    12.62s  agent 발화 끝
    20.79s  <ret> 발화 (turn3 첫 프레임)
    21.03s  agent 발화 시작: <ret> 미국은 천팔백육십사 년에 처음으로 동전에 “In God We Trust” 사용을 승인했고, 그 후
    21.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.03s]: The United States first authorized the use of “In God We Trust” on coi
    21.03s  user  발화 끝
    39.05s  user  발화 시작: 천팔백육십사 년? 와, 생각보다 훨씬 빠르네. 그때 링컨 대통령이었어?
    39.05s  agent 발화 끝
    44.22s  <ret> 발화 (turn5 첫 프레임)
    44.46s  agent 발화 시작: <ret> 네, 에이브러햄 링컨 대통령은 천팔백육십일 년 삼 월 사일부터 천팔백육십오 년 사 월 십오일에 암
    44.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.02s]: Abraham Lincoln was president of the United States from March 4, 1861,
    44.46s  user  발화 끝
    56.48s  user  발화 시작: 어어.
    56.48s  agent 발화 끝
    57.08s  user  발화 시작: 그럼 남북 전쟁이랑 관련이 있는 거야? 애국심에 대한 반응 같은 거?
    57.08s  user  발화 끝
    63.69s  agent 발화 시작: 그 당시 사회의 세속화가 증가하고 신앙을 인정하려는 욕구에 대한 반응이었던 것 같아요. 정말 흥미로운 역사적
    63.69s  user  발화 끝
    73.30s  user  발화 시작: 음. 그때도 엄청 논쟁이 많았을까?
    73.30s  agent 발화 끝
    75.99s  <ret> 발화 (turn10 첫 프레임)
    76.31s  agent 발화 시작: <ret> 천팔백육십사 년에 동전에 문구가 등장했지만, 천구백오십육 년이 되어서야 공식적인 모토가 되었어요—
    76.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.61s]: Although the phrase "In God We Trust" appeared on coins in 1864, it wa
    76.31s  user  발화 끝
    82.92s  user  발화 시작: …근데 오십년대에도 엄청 논쟁이 심했잖아. 소송도 있었던 걸로 들었어.
    82.92s  agent 발화 끝
    88.24s  <ret> 발화 (turn12 첫 프레임)
    88.32s  agent 발화 시작: <ret> 천구백오십팔 년 대법원 판결인 *Blau v. Fortier* 사건에서 헌법적 합법성이 인정되었고
    88.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.63s]: In 1958, the Supreme Court case *Blau v. Fortier* upheld the constitut
    88.32s  user  발화 끝
   106.95s  user  발화 시작: 그러니까 실제로 대법원까지 소송이 갔었어?
   106.95s  agent 발화 끝
   109.95s  agent 발화 시작: 네, 그랬어요. 법적 해석이 시간이 지남에 따라 어떻게 진화하는지 정말 흥미롭죠. 신앙과 공공 생활에 대한 
   109.95s  user  발화 끝
   123.17s  user  발화 시작: 다른 나라들은 어때? 다른 나라들도 돈에 비슷한 모토가 있어?
   123.17s  agent 발화 끝
   128.34s  <ret> 발화 (turn16 첫 프레임)
   128.58s  agent 발화 시작: <ret> 많은 나라들이 통화에 모토를 포함하고 있어요. 예를 들어 미국 동전에는 “E pluribus un
   128.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=19.23s]: (tool result) Many nations include national mottos on their currency, 
   128.58s  user  발화 끝
   147.81s  user  발화 시작: “Dieu et mon droit”? 그거… 엄청 위엄 있네.
   147.81s  agent 발화 끝
   152.61s  agent 발화 시작: 그렇죠, 안 그래요? 영국에서 오랜 군주제 전통을 반영하는 것 같아요. 역사와 문화가 어떻게 얽혀 있는지 보
   152.61s  user  발화 끝
   163.43s  user  발화 시작: 맞아. 날씨는…
   163.43s  agent 발화 끝
   164.63s  user  발화 시작: …지금 런던은 어때?
   164.63s  user  발화 끝
   166.19s  <ret> 발화 (turn21 첫 프레임)
   166.43s  agent 발화 시작: <ret> 런던의 날씨는 이십일 점 영도, 습도는 육십팔 퍼센트, 풍속은 시속 팔 점 이 킬로미터이고, 부분
   166.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.22s]: (tool result) London: 21.0°C, humidity 68%, wind 8.2 km/h, condition: 
   166.43s  user  발화 끝
   179.65s  user  발화 시작: 좋네. 고마워, 바리엔.
   179.65s  agent 발화 끝
   181.45s  agent 발화 시작: 천만에요. 오늘 하루 잠깐이라도 자신을 위한 시간을 가지세요. 심호흡 몇 번만 해도 큰 도움이 될 거예요.
   181.45s  user  발화 끝
   191.07s  agent 발화 끝
