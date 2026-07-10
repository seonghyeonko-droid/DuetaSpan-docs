# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "은연",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 잭 소크랑 라파엘라 레지가 무슨 스포츠를 했는지 궁금해요. | S2 이야, 대단하네요. 그럼 라파엘라 레지는 누가 상대였을까요? | S3 테니스 코치라니, 멋지네요. 잭 소크 선수는요? | S4 서로 다른 나라 출신이군요. 그럼 잭 소크 선수의 고향은 어디

     0.00s  user  발화 시작: 잭 소크랑 라파엘라 레지가 무슨 스포츠를 했는지 궁금해요.
     3.69s  <ret> 발화 (turn1 첫 프레임)
     3.75s  user  발화 끝
     3.84s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수 모두 테니스를 쳐요. 혹시 다른 선수들에 대해서도 알아보고 싶
     5.13s  ⚡SPAN 주입 [d'=1.44s / d_lead=7.13s]: Jack Sock and Raffaella Reggi both play tennis.
     6.05s  user  발화 시작: 네.
     6.40s  user  발화 끝
    10.97s  agent 발화 끝
    11.47s  user  발화 시작: 음… 그 두 사람 테니스 실력이 어느 정도인지 좀 더 자세히 알려줄 수 있을까요?
    16.38s  <ret> 발화 (turn4 첫 프레임)
    16.53s  agent 발화 시작: <ret> 잭 소크 선수는 남자 단식 테니스에서 세계 팔위까지 오른 적이 있어요. 실력이 아주 뛰어난 선수죠
    16.62s  user  발화 끝
    18.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: Jack Sock has been ranked as high as world No. 8 in men's singles tenn
    23.34s  user  발화 시작: 팔위면 꽤 높은 순위네요. 근데 라파엘라 레지는 어떤가요?
    23.76s  agent 발화 끝
    26.69s  <ret> 발화 (turn6 첫 프레임)
    27.04s  user  발화 끝
    27.07s  agent 발화 시작: <ret> 라파엘라 레지 선수는 프로 테니스 선수로 활동했고, 최고 순위가 세계 백칠십일위였어요. 꽤 괜찮은
    28.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: Raffaella Reggi is a former professional tennis player who reached a c
    35.14s  user  발화 시작: 백칠십일위면 잭 소크보다 훨씬 낮은 순위네요. 두 사람 경기한 적이 있나요?
    35.28s  agent 발화 끝
    39.36s  <ret> 발화 (turn8 첫 프레임)
    39.72s  user  발화 끝
    39.75s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수는 프로 테니스 경기에서 서로 맞붙은 적은 없어요. 기회가 없었
    41.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.96s]: Jack Sock and Raffaella Reggi have never played a professional tennis 
    47.69s  user  발화 시작: 아, 경기한 적이 없군요. 그럼 혹시 잭 소크 선수는 다른 유명 선수랑 경기한 적이 있나요?
    47.71s  agent 발화 끝
    52.19s  <ret> 발화 (turn10 첫 프레임)
    52.34s  agent 발화 시작: <ret> 잭 소크 선수는 로저 페더러, 라파엘 나달, 노박 조코비치 선수와 경기한 적이 있어요. 쟁쟁한 선
    52.56s  user  발화 끝
    54.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Jack Sock has played against Roger Federer, Rafael Nadal, and Novak Dj
    60.08s  agent 발화 끝
    60.37s  user  발화 시작: 이야, 대단하네요. 그럼 라파엘라 레지는 누가 상대였을까요?
    64.05s  <ret> 발화 (turn12 첫 프레임)
    64.29s  agent 발화 시작: <ret> 라파엘라 레지 선수는 세레나 윌리엄스와 비너스 윌리엄스 선수와 경쟁했어요. 역시 뛰어난 선수들이었
    64.54s  user  발화 끝
    66.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: Raffaella Reggi competed against players such as Serena Williams and V
    68.16s  user  발화 시작: 네.
    68.69s  user  발화 끝
    71.47s  agent 발화 끝
    71.98s  user  발화 시작: 세레나 윌리엄스, 비너스 윌리엄스… 엄청난 선수들이네요. 혹시 두 사람 다 그랜드 슬램에서 우승한 적이 있나
    79.32s  <ret> 발화 (turn15 첫 프레임)
    79.55s  agent 발화 시작: <ret> 잭 소크 선수는 이천십팔년 US 오픈 남자 복식에서 우승했고, 라파엘라 레지 선수는 그랜드 슬램에
    79.63s  user  발화 끝
    80.60s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.71s]: Jack Sock won the 2018 US Open men's doubles title, while Raffaella Re
    88.26s  agent 발화 끝
    88.38s  user  발화 시작: 아, 잭 소크 선수만 우승했군요. 라파엘라 레지 선수는 복식은 어땠나요?
    93.55s  <ret> 발화 (turn17 첫 프레임)
    93.63s  agent 발화 시작: <ret> 라파엘라 레지 선수는 천구백구십구년 호주 오픈 여자 복식에서 준결승까지 진출했어요. 복식에서도 좋
    93.84s  user  발화 끝
    94.05s  ⚡SPAN 주입 [d'=0.50s / d_lead=9.27s]: Raffaella Reggi reached the quarterfinals of the 1999 Australian Open 
   102.90s  agent 발화 끝
   102.94s  user  발화 시작: 준결승이면 꽤 잘한 거네요. 두 사람 다 은퇴했나요?
   106.54s  <ret> 발화 (turn19 첫 프레임)
   106.64s  user  발화 끝
   106.85s  agent 발화 시작: <ret> 잭 소크 선수는 이천이십삼년 십이월에 은퇴했고, 라파엘라 레지 선수는 이천사년에 은퇴했어요. 각자
   108.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: Jack Sock retired from professional tennis in December 2023, while Raf
   113.47s  user  발화 시작: 그렇군요.
   114.20s  user  발화 끝
   116.70s  user  발화 시작: 이천사년이면 꽤 오래됐네요. 지금은 뭐 하고 있을까요?
   116.82s  agent 발화 끝
   119.78s  <ret> 발화 (turn22 첫 프레임)
   120.02s  agent 발화 시작: <ret> 라파엘라 레지 선수는 현재 이탈리아에서 테니스 코치로 활동하고 계세요. 후배 양성에 힘쓰시는 모습
   120.21s  user  발화 끝
   121.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: Raffaella Reggi is now a tennis coach in Italy.
   125.33s  user  발화 시작: 음.
   125.55s  user  발화 끝
   127.98s  user  발화 시작: 테니스 코치라니, 멋지네요. 잭 소크 선수는요?
   127.99s  agent 발화 끝
   131.02s  <ret> 발화 (turn25 첫 프레임)
   131.35s  user  발화 끝
   131.41s  agent 발화 시작: <ret> 잭 소크 선수는 여러 사업에 참여하고 있고, 여전히 테니스 커뮤니티에서 활동하고 있어요. 다재다능
   133.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: Jack Sock is involved in various business ventures and remains active 
   138.36s  user  발화 시작: 사업도 한다고요? 대단하네요. 혹시 잭 소크 선수의 키가 얼마나 되나요?
   138.50s  agent 발화 끝
   142.79s  <ret> 발화 (turn27 첫 프레임)
   143.18s  agent 발화 시작: <ret> 잭 소크 선수의 키는 일미터 팔십삼센티미터예요. 꽤 큰 키시죠.
   143.40s  user  발화 끝
   144.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: Jack Sock is 1.83 meters tall.
   148.04s  agent 발화 끝
   148.44s  user  발화 시작: 백팔십삼cm면 꽤 크네요. 라파엘라…
   151.48s  user  발화 끝
   152.56s  user  발화 시작: …레지 선수는 키가 얼마나 됐을까요?
   154.68s  <ret> 발화 (turn30 첫 프레임)
   155.00s  agent 발화 시작: <ret> 라파엘라 레지 선수의 키는 일미터 육십오센티미터예요. 잭 소크 선수보다는 조금 작으시죠.
   155.05s  user  발화 끝
   156.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.72s]: Raffaella Reggi is 1.65 meters tall.
   161.72s  agent 발화 끝
   161.89s  user  발화 시작: 그렇군요. 두 사람의 국적이 어떻게 되나요?
   164.07s  <ret> 발화 (turn32 첫 프레임)
   164.39s  agent 발화 시작: <ret> 잭 소크 선수는 미국 국적이고, 라파엘라 레지 선수는 이탈리아 국적이에요. 서로 다른 나라 출신이
   164.48s  user  발화 끝
   165.03s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.28s]: Jack Sock is American, and Raffaella Reggi is Italian.
   168.74s  user  발화 시작: 음.
   169.24s  user  발화 끝
   171.58s  user  발화 시작: 서로 다른 나라 출신이군요. 그럼 잭 소크 선수의 고향은 어디인가요?
   171.67s  agent 발화 끝
   175.36s  <ret> 발화 (turn35 첫 프레임)
   175.51s  agent 발화 시작: <ret> 잭 소크 선수는 미국 네브래스카주 링컨에서 태어났어요. 고향이 아름다운 곳이겠죠.
   175.75s  user  발화 끝
   177.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: Jack Sock was born in Lincoln, Nebraska, USA.
   177.44s  user  발화 시작: 맞아요.
   177.94s  user  발화 끝
   180.88s  agent 발화 끝
   181.80s  user  발화 시작: 네브래스카주요. 라파엘라 레지 선수의 고향은 어디인가요?
   185.53s  <ret> 발화 (turn38 첫 프레임)
   185.93s  agent 발화 시작: <ret> 라파엘라 레지 선수는 이탈리아 사르데냐 섬 카글리아리에서 태어났어요. 지중해의 아름다운 섬이죠.
   186.05s  user  발화 끝
   187.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: Raffaella Reggi was born in Cagliari, Sardinia, Italy.
   190.40s  user  발화 시작: 네.
   190.76s  user  발화 끝
   192.27s  agent 발화 끝
   192.62s  user  발화 시작: 사르데냐 섬이군요. 두 사람 다 테니스에 재능이 있었나 봐요.
   195.53s  <ret> 발화 (turn41 첫 프레임)
   195.92s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수 모두 주니어 시절부터 테니스 재능을 보였어요. 어릴 때부터 테
   196.18s  user  발화 끝
   197.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: Both Jack Sock and Raffaella Reggi showed early promise in tennis as j
   204.81s  user  발화 시작: 어릴 때부터였군요. 혹시 두 사람의 생년월일도 알 수 있을까요?
   204.96s  agent 발화 끝
   208.35s  <ret> 발화 (turn43 첫 프레임)
   208.75s  agent 발화 시작: <ret> 잭 소크 선수는 천구백구십이년 십일월 스물넷째 날에 태어났고, 라파엘라 레지 선수는 천구백칠십구년
   208.92s  user  발화 끝
   210.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.51s]: Jack Sock was born on November 24, 1992, and Raffaella Reggi was born 
   218.26s  agent 발화 끝
   218.51s  user  발화 시작: 그렇군요. 두 분 모두 건강하게 잘 지내셨으면 좋겠네요.
   222.12s  agent 발화 시작: 두 분 모두 건강하고 행복하게 지내시길 저도 바랍니다. 이야기를 나눠서 즐거웠어요.
   222.35s  user  발화 끝
   227.39s  agent 발화 끝
