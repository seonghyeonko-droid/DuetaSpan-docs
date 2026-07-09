# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2026-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-06-11",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 선수들 | S2 아, 델레이 비치 오픈에서 우승했군요. 라파엘라 레지 선수는  | S3 그렇군요. 두 분 다 테니스라는 스포츠로 많은 활약을 하셨네요 | S4 혹시 잭 소크 선수의 키가 얼마나 되나요?

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지 선수, 혹시 무슨 스포츠 하는 선수들인가요?
     6.11s  user  발화 끝
     6.30s  agent 발화 시작: 두 분 다 테니스 선수이신 걸로 알고 있어요.
     7.16s  user  발화 시작: 네.
     7.80s  user  발화 끝
     9.29s  user  발화 시작: 테니스요? 음… 잘 모르겠네요. 그 선수들이 테니스 선수라는 확실한 정보가 있나요?
     9.35s  agent 발화 끝
    16.77s  <ret> 발화 (turn4 첫 프레임)
    17.16s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수 두 분은 모두 프로 테니스 선수이시고, 주요 토너먼트에도 참가
    17.21s  user  발화 끝
    17.97s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.80s]: [source: Wikipedia] Jack Sock and Raffaella Reggi are both professiona
    25.55s  agent 발화 끝
    27.34s  user  발화 시작: 아, 그렇군요. 그런데 그 두 분이 함께 테니스를 쳤다는 이야기는 처음 듣는데요. 혹시 같이 뛴 적이 있나요
    35.01s  agent 발화 시작: 두 분이 함께 테니스를 쳤다는 기록은 찾기 어렵네요. 주로 개인 경기로 활동하신 것 같아요.
    35.22s  user  발화 끝
    40.99s  user  발화 시작: 음… 그럼 혹시 잭 소크 선수는 어떤 대회에서 유명한가요?
    41.08s  agent 발화 끝
    45.54s  <ret> 발화 (turn8 첫 프레임)
    45.69s  agent 발화 시작: <ret> 잭 소크 선수는 이천십칠년 델레이 비치 오픈에서 밀로스 라오니치를 꺾고 첫 ATP 타이틀을 획득하
    45.90s  user  발화 끝
    47.06s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.31s]: [source: ATP Tour] Jack Sock won his first ATP title at the 2017 Delra
    53.40s  user  발화 시작: 아, 델레이 비치 오픈에서 우승했군요. 라파엘라 레지 선수는 어떤 활약을 하셨나요?
    53.41s  agent 발화 끝
    60.16s  <ret> 발화 (turn10 첫 프레임)
    60.55s  agent 발화 시작: <ret> 라파엘라 레지 선수의 커리어를 살펴볼게요. 라파엘라 레지 선수는 천구백구십육년 애틀랜타 올림픽에서
    60.72s  user  발화 끝
    61.20s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.17s]: [source: ITF Tennis] Raffaella Reggi competed in the 1996 Atlanta Olym
    70.70s  user  발화 시작: 올림픽에도 참가하셨다니 대단하네요. 두 분은 테니스 외에 다른 스포츠도 하나요?
    70.71s  agent 발화 끝
    77.14s  user  발화 끝
    77.52s  agent 발화 시작: 두 분 모두 테니스에 집중하신 것으로 보입니다. 다른 스포츠 경력은 확인되지 않네요.
    80.59s  user  발화 시작: 네.
    81.22s  user  발화 끝
    83.26s  agent 발화 끝
    83.28s  user  발화 시작: 음… 테니스 선수로서의 삶에 헌신하셨군요. 잭 소크 선수는 현재도 활동하고 있나요?
    90.48s  <ret> 발화 (turn15 첫 프레임)
    90.63s  agent 발화 시작: <ret> 잭 소크 선수는 이천이십삼년 십이월, 계속되는 부상으로 인해 프로 테니스에서 은퇴하셨어요.
    90.74s  user  발화 끝
    91.60s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.56s]: [source: ESPN] Jack Sock retired from professional tennis in December 
    97.01s  user  발화 시작: 은퇴하셨다니 아쉽네요. 라파엘라 레지 선수는 지금은 뭘 하고 계실까요?
    97.16s  agent 발화 끝
   103.06s  agent 발화 시작: 라파엘라 레지 선수의 현재 활동은 찾기 어려웠어요. 은퇴 후의 정보는 공개되지 않은 것 같습니다.
   103.21s  user  발화 끝
   109.75s  user  발화 시작: 그렇군요. 두 분 다 테니스라는 스포츠로 많은 활약을 하셨네요.
   109.87s  agent 발화 끝
   114.71s  agent 발화 시작: 맞아요. 테니스 코트 위에서 보여주신 열정은 많은 사람들에게 감동을 줬을 거예요.
   114.75s  user  발화 끝
   118.64s  user  발화 시작: 네.
   119.22s  user  발화 끝
   120.96s  agent 발화 끝
   120.99s  user  발화 시작: 혹시 잭 소크 선수 은퇴 전에 마지막으로 참가했던 대회는 어디였나요?
   126.07s  <ret> 발화 (turn22 첫 프레임)
   126.30s  agent 발화 시작: <ret> 잭 소크 선수의 마지막 대회는 이천이십삼년 애틀랜타 오픈이었고, 일라운드에서 패배하셨어요.
   126.54s  user  발화 끝
   128.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: [source: Tennis.com] Jack Sock’s final tournament was the 2023 Atlanta
   132.97s  agent 발화 끝
   133.61s  user  발화 시작: 아, 애틀랜타 오픈이 마지막이었군요. 라파엘라 레지 선수의 최고 랭킹은 어느 정도였나요?
   140.25s  <ret> 발화 (turn24 첫 프레임)
   140.48s  agent 발화 시작: <ret> 라파엘라 레지 선수는 천구백구십육년 십월에 여자 단식 세계 랭킹 이십육위를 기록하셨어요.
   140.71s  user  발화 끝
   142.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: [source: WTA Tennis] Raffaella Reggi achieved a career-high ranking of
   145.35s  user  발화 시작: 그렇죠.
   146.21s  user  발화 끝
   147.63s  user  발화 시작: 이십육위면 꽤 높은 랭킹이네요. 두 분 다 정말 대단한 선수들이었어요.
   147.85s  agent 발화 끝
   152.64s  agent 발화 시작: 두 분 모두 테니스계에 훌륭한 업적을 남기셨다고 생각해요.
   152.81s  user  발화 끝
   156.81s  agent 발화 끝
   157.03s  user  발화 시작: 혹시 잭 소크 선수의 키가 얼마나 되나요?
   160.22s  user  발화 끝
   160.28s  <ret> 발화 (turn29 첫 프레임)
   160.35s  agent 발화 시작: <ret> 잭 소크 선수는 키가 일미터 팔십오센티미터, 약 육피트 일인치 정도 되세요.
   160.78s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.33s]: [source: Body Size] Jack Sock is 1.85 meters tall, which is approximat
   166.46s  agent 발화 끝
   167.92s  user  발화 시작: 일미터 팔십오센티미터면 꽤 크네요. 라파엘라 레지 선수는 키가 얼마나 되나요?
   173.74s  <ret> 발화 (turn31 첫 프레임)
   174.05s  agent 발화 시작: <ret> 라파엘라 레지 선수는 키가 일미터 칠십오센티미터, 약 오피트 구인치 정도 되세요.
   174.18s  user  발화 끝
   175.34s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.56s]: [source: Famous Birthdays] Raffaella Reggi is 1.75 meters tall, which 
   176.78s  user  발화 시작: 음.
   177.27s  user  발화 끝
   180.58s  agent 발화 끝
   180.68s  user  발화 시작: 아, 잭 소크 선수보다 조금 작으시네요. 오늘 정보 정말 감사합니다.
   186.19s  user  발화 끝
   186.22s  agent 발화 시작: 도움이 되었다니 기쁘네요. 언제든 편하게 이야기 나누러 오세요.
   191.41s  agent 발화 끝
