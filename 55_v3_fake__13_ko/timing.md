# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "보담",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그 영화, '이미테이션 게임'이 무슨 내용이야? | S2 블레츨리 파크가 어디야? | S3 …그 영화가 튜링의 실제 삶이랑 얼마나 똑같아? | S4 화학적 거세가 뭔데?

     0.00s  user  발화 시작: 그 영화, '이미테이션 게임'이 무슨 내용이야?
     3.03s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> 이차 세계대전 당시 에니그마 암호를 해독한 영국 암호 해독가 앨런 튜링의 이야기예요. 그분은 정말
     3.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: British cryptanalyst Alan Turing is credited with cracking the Enigma 
     3.33s  user  발화 끝
     7.66s  user  발화 시작: 진짜?
     8.52s  user  발화 끝
    10.14s  agent 발화 끝
    11.29s  user  발화 시작: 앨런 튜링이 누구야?
    12.78s  <ret> 발화 (turn4 첫 프레임)
    13.04s  user  발화 끝
    13.18s  agent 발화 시작: <ret> 앨런 튜링은 튜링 기계를 개념화한 영국의 수학자이자 컴퓨터 과학자였어요. 컴퓨터 과학의 아버지라고
    13.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.84s]: Alan Turing was a British mathematician and computer scientist who con
    21.01s  agent 발화 끝
    21.58s  user  발화 시작: 튜링 기계가 뭔데?
    22.71s  <ret> 발화 (turn6 첫 프레임)
    23.03s  agent 발화 시작: <ret> 튜링 기계는 테이프 위의 기호를 조작하는 계산의 이론적인 모델이에요. 현대 컴퓨터의 기초가 된 중
    23.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.56s]: The Turing machine is a theoretical model of computation that manipula
    23.14s  user  발화 끝
    30.30s  user  발화 시작: 아, 그렇구나. 그럼 그 영화는…
    30.59s  agent 발화 끝
    32.56s  user  발화 끝
    34.07s  user  발화 시작: …튜링이 암호를 해독하는 과정을 보여주는 거야?
    37.48s  <ret> 발화 (turn9 첫 프레임)
    37.64s  agent 발화 시작: <ret> 네, 영화는 이차 세계대전 중 블레츨리 파크에서 독일군의 에니그마 암호 기계를 해독하는 튜링의 과
    37.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: The film depicts Turing's work at Bletchley Park during World War II, 
    37.78s  user  발화 끝
    44.82s  agent 발화 끝
    44.89s  user  발화 시작: 블레츨리 파크가 어디야?
    46.17s  <ret> 발화 (turn11 첫 프레임)
    46.49s  agent 발화 시작: <ret> 블레츨리 파크는 영국 버킹엄셔에 있는 저택과 부동산으로, 이차 세계대전 중 영국 암호 해독자들의 
    46.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: Bletchley Park is a country house and estate in Buckinghamshire, Engla
    46.63s  user  발화 끝
    53.67s  agent 발화 끝
    54.10s  user  발화 시작: 영화에 다른 등장인물도 있어?
    56.05s  <ret> 발화 (turn13 첫 프레임)
    56.17s  user  발화 끝
    56.37s  agent 발화 시작: <ret> 영화에는 키이라 나이틀리가 조앤 클라크 역으로 출연하는데, 튜링과 함께 일했던 암호 해독가예요.
    56.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: The film also stars Keira Knightley as Joan Clarke, a cryptanalyst who
    62.13s  user  발화 시작: 조앤 클라크는 어떤 역할을 해?
    62.45s  agent 발화 끝
    64.70s  <ret> 발화 (turn15 첫 프레임)
    64.86s  agent 발화 시작: <ret> 조앤 클라크는 블레츨리 파크의 암호 해독 노력에 중요한 역할을 했던 뛰어난 수학자였어요.
    64.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: Joan Clarke was a brilliant mathematician who played a crucial role in
    64.94s  user  발화 끝
    66.86s  user  발화 시작: 응.
    67.22s  user  발화 끝
    70.32s  agent 발화 끝
    70.33s  user  발화 시작: 그 영화는 상을 받았어?
    72.17s  <ret> 발화 (turn18 첫 프레임)
    72.33s  agent 발화 시작: <ret> '이미테이션 게임'은 아카데미 시상식에서 여덟 개 부문에 후보에 올랐고, 각색상 부문을 수상했어요
    72.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: The Imitation Game received eight Academy Award nominations, including
    72.40s  user  발화 끝
    78.39s  <ret> 발화 (turn19 첫 프레임)
    78.44s  agent 발화 끝
    78.55s  agent 발화 시작: <ret> 영화의 연출도 훌륭하다는 평이 많아요—
    78.55s  ⚡SPAN 주입(IRRELEVANT) [d'=1.28s / d_lead=2.82s]: The current temperature in Tokyo is 28.5°C, with humidity at 65% and a
    80.67s  user  발화 시작: …그 영화가 튜링의 실제 삶이랑 얼마나 똑같아?
    81.37s  agent 발화 끝
    83.79s  <ret> 발화 (turn21 첫 프레임)
    84.19s  agent 발화 시작: <ret> 음, 영화는 실제 사건을 바탕으로 하지만, 극적인 효과를 위해 일부 각색이 있었어요.
    84.19s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.44s]: Historical accounts reveal that Turing’s personal life and struggles w
    84.37s  user  발화 끝
    90.63s  agent 발화 끝
    90.70s  agent 발화 시작: 역사적 기록에 따르면 튜링의 개인적인 삶과 고통은 영화에서 묘사된 것보다 더 복잡했어요.
    94.05s  user  발화 시작: 응.
    94.50s  user  발화 끝
    96.44s  agent 발화 끝
    96.44s  user  발화 시작: 어떤 점이 다른데?
    97.77s  <ret> 발화 (turn25 첫 프레임)
    98.17s  agent 발화 시작: <ret> 영화는 튜링의 동성애와 그로 인해 겪었던 법적인 문제들을 다소 단순화했어요.
    98.17s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.14s]: The film simplifies some of the complexities surrounding Turing's homo
    98.20s  user  발화 끝
   103.31s  agent 발화 끝
   104.11s  user  발화 시작: 아, 그렇구나. 슬픈 이야기네.
   106.32s  user  발화 끝
   106.38s  agent 발화 시작: 네, 정말 안타까운 이야기예요.
   107.08s  user  발화 시작: 아.
   107.48s  user  발화 끝
   108.45s  agent 발화 끝
   109.88s  user  발화 시작: 튜링은 왜 그렇게 됐어?
   111.95s  <ret> 발화 (turn30 첫 프레임)
   111.99s  user  발화 끝
   112.03s  agent 발화 시작: <ret> 튜링은 천구백오십이년 동성애 행위로 기소되었고, 당시 영국에서 불법이었기 때문에 화학적 거세를 받
   112.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: Turing was prosecuted for homosexual acts in 1952, which were illegal 
   119.90s  user  발화 시작: 화학적 거세가 뭔데?
   119.96s  agent 발화 끝
   121.06s  <ret> 발화 (turn32 첫 프레임)
   121.44s  agent 발화 시작: <ret> 화학적 거세는 성욕과 성적 충동을 줄이기 위한 호르몬 치료를 포함하는 논란이 많았던 관행이었어요.
   121.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: Chemical castration involved hormone therapy to reduce libido and sexu
   121.65s  user  발화 끝
   127.93s  agent 발화 끝
   128.13s  user  발화 시작: 너무 슬프다…
   129.22s  agent 발화 시작: 저도 마음이 아픕니다. 튜링은 많은 고통을 겪으셨죠.
   129.37s  user  발화 끝
   130.87s  user  발화 시작: 응.
   131.32s  user  발화 끝
   132.96s  agent 발화 끝
   132.98s  user  발화 시작: 튜링은 나중에 어떻게 됐어?
   134.86s  <ret> 발화 (turn37 첫 프레임)
   135.05s  user  발화 끝
   135.10s  agent 발화 시작: <ret> 튜링은 천구백오십사년 시안화물 중독으로 사망했는데, 자살로 판결되었지만 여전히 논쟁이 있어요.
   135.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: Alan Turing died in 1954 from cyanide poisoning, ruled as a suicide, t
   142.05s  agent 발화 끝
   142.09s  user  발화 시작: 정말 비극적인 삶이었네.
   144.17s  user  발화 끝
   144.24s  agent 발화 시작: 네, 정말 안타까운 일이에요. 튜링의 업적은 영원히 기억될 거예요.
   148.77s  agent 발화 끝
