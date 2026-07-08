# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마침 궁금했는데요, 마이클 잭슨의 “Beat It” 기타 솔로를 실제로 누가 연주했는지 궁금해요. 다른 곡들
     9.38s  <ret> 발화 (turn1 첫 프레임)
     9.77s  agent 발화 시작: <ret> 정말 날카로운 관찰이세요, “Beat It”에 대해서요.
     9.83s  user  발화 끝
    10.66s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.09s]: <Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat 
    12.64s  agent 발화 시작: 에디 반 헤일런이 천구백팔십이 년에 그 상징적인 기타 솔로를 연주했습니다.
    12.86s  agent 발화 끝
    18.16s  user  발화 시작: 와, 에디 반 헤일런이요? 마이클 잭슨과 함께 작업했다는 걸 몰랐어요. 정말 의외의 조합이네요.
    18.20s  agent 발화 끝
    24.97s  agent 발화 시작: 네, 당시로서는 꽤 뜻밖의 조합이었죠.
    25.25s  user  발화 끝
    28.25s  agent 발화 끝
    29.02s  user  발화 시작: 저기요, 냉동고에서 닭고기를 꺼냈었는지 기억하세요?
    32.80s  user  발화 시작: 죄송합니다. 다시 음악 이야기로 돌아가서, 그분이 솔로 연주자로 처음 선택된 사람이었나요, 아니면 다른 사람
    33.05s  user  발화 끝
    40.82s  <ret> 발화 (turn7 첫 프레임)
    40.97s  agent 발화 시작: <ret> 초기 고려 사항을 확인해 보니… 퀸시 존스가 먼저 에릭 클랩튼과 제프 벡에게 부탁했지만, 그분들은
    41.19s  user  발화 끝
    41.38s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.92s]: <Quincy Jones initially sought Eric Clapton and Jeff Beck for the solo
    48.66s  agent 발화 끝
    48.98s  user  발화 시작: 그럼 반 헤일런은 거의 마지막 보루였던 거군요? 그분이 곡에 참여하게 된 게 정말 놀랍네요.
    55.46s  user  발화 끝
