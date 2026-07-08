# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 잭 소크 선수랑 라파엘라 레지 선수 두 분이 같은 스포츠를 하셨는지 궁금했어요.
     5.47s  user  발화 끝
     5.51s  agent 발화 시작: 좋은 질문이세요—많은 운동선수분들이 종목을 넘나들기도 하잖아요.
     9.92s  <ret> 발화 (turn2 첫 프레임)
    10.23s  agent 발화 시작: <ret> 잠시 확인해 볼게요… 잭 소크 선수와 라파엘라 레지 선수 두 분 모두 프로 테니스 선수이십니다.
    10.33s  agent 발화 끝
    11.60s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.14s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    16.94s  user  발화 시작: 테니스군요? 알겠습니다. 그런데 레지 선수… 소크 선수보다 나이가 좀 더 많으시죠?
    16.95s  agent 발화 끝
    23.52s  user  발화 끝
    23.91s  agent 발화 시작: 열정적인 마음이 있다면 나이는 중요하지 않다고 생각해요.
    27.49s  <ret> 발화 (turn5 첫 프레임)
    27.88s  agent 발화 시작: <ret> 두 분의 생년월일을 비교해 드릴까요… 라파엘라 레지 선수는 1980년생이고, 잭 소크 선수는 19
    28.08s  agent 발화 끝
    29.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: Raffaella Reggi was born on December 26, 1980, and Jack Sock on Novemb
    36.54s  agent 발화 끝
    36.56s  user  발화 시작: 잠깐만요, 1980년생이라고요? 그러면… 이제 40대이신가요?
    41.81s  user  발화 시작: 그렇다면 40대 이후에도 높은 수준에서 계속 경쟁하고 계신다는 말씀이시군요? 정말 대단하시네요!
    41.87s  agent 발화 시작: 음—
    41.88s  user  발화 끝
    42.36s  agent 발화 끝
    47.74s  agent 발화 시작: 정말 그렇습니다, 그렇죠? 경쟁에서는 정신력이 전부예요.
    47.78s  user  발화 끝
    51.71s  <ret> 발화 (turn10 첫 프레임)
    51.90s  agent 발화 끝
    51.94s  agent 발화 시작: <ret> 좀 더 자세히 알아보기 위해 최근 랭킹을 확인해 볼게요… 라파엘라 레지 선수는 2023년 11월 
    53.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.47s]: As of November 2023, Raffaella Reggi is ranked 448th in women’s single
    63.12s  agent 발화 끝
